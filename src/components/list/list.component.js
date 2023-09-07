import { useDispatch } from 'react-redux'
import FakeItem from '../fake-item/fake-item.component'
import styles from './list.module.scss'
import { setIsDropdownVisible } from '../../redux/reducers/global-reducer'

const List = ( { fakeItems, items, direction, dropdownId } ) => {
    const dispatch = useDispatch()
    // Set classnames
    const className = direction === 'vertical'
        ? [styles['list'], styles['list--vertical']].join( ' ' )
        : styles['list']

    const handleClick = () => {
        dispatch(setIsDropdownVisible({ dropdownId, isVisible: false } ))
    }

    return (
        <ul className={className}>
            {fakeItems?.map( ( item, index ) => (
                <li
                    key={index}
                    className={styles['list__item']}
                >
                    <FakeItem
                        type={item.type}
                        color={item.color}
                        width={item.width}
                    />
                </li>
            ) )}
            {items?.map( ( item, index ) => (
                <li
                    key={index}
                    className={styles['list__item']}
                    onClick={handleClick}
                >
                    <span className={[styles['item__symbol'], styles['symbol']].join( ' ' )}>
                        {item.symbol}
                    </span>
                    <span className={styles['item__text']}>
                        {item.text}
                    </span>
                </li>
            ) )}
        </ul>
    )
}

export default List