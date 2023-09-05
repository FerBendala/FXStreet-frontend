import styles from './fake-item.module.scss'

const FakeItem = ( { color, type = 'all', width } ) => {
    // Set classnames to show a circle a line or both
    const classNames = type === 'all' ? ['circle', 'line'] : [type]

    // Set width to lines (circles have always same size)
    const setWidth = item =>
        ( type === 'all' && item === 'line' ) || ( item === 'line' && width )

    return (
        <div className={styles['fake-item']}>
            {classNames.map( ( item, index ) => (
                <span
                    key={index}
                    className={styles[`fake-item__${item}`]}
                    style={{
                        backgroundColor: color,
                        width: setWidth( item ) ? width : 'auto'
                    }}
                ></span>
            ) )}
        </div>
    )
}

export default FakeItem
