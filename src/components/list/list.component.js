import FakeItem from '../fake-item/fake-item.component'
import styles from './list.module.scss'

const List = ( { content, direction } ) => {
    // Set classnames
    const className = direction === 'vertical'
        ? [styles['list'], styles['list--vertical']].join( ' ' )
        : styles['list']

    return (
        <ul className={className}>
            {content.map( ( type, index ) => (
                <li
                    key={index}
                    className={styles['list__item']}
                >
                    <FakeItem
                        type={type[0]}
                        color={type[1]}
                        width={type[2]}
                    />
                </li>
            ) )}
        </ul>
    )
}

export default List