import styles from './tab.module.scss'

const Tab = ( { text, active, onClick } ) => {
    const id = text.toLowerCase().replace( / /g, '' )

    return (
        <button
            id={id}
            className={active
                ? [styles['tab'], styles['active']].join( ' ' )
                : styles['tab']
            }
            onClick={() => onClick( text )}
        >
            <span className={styles['tab__text']}>{text}</span>
        </button>
    )
}

export default Tab