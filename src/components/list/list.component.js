import FakeItem from '../fake-item/fake-item.component'
import styles from './list.module.scss'

const List = ( { fakeItems, items, direction } ) => {
    // Set classnames
    const className = direction === 'vertical'
        ? [styles['list'], styles['list--vertical']].join( ' ' )
        : styles['list']

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