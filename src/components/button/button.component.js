import styles from './button.module.scss'

const Button = ( { symbol, text, onClick, active } ) => {
    return (
        <button
            onClick={onClick}
            className={active
                ? [styles['button'], styles['active']].join( ' ' )
                : styles['button']
            }
        >
            {symbol &&
                <span className={[
                    styles['symbols'],
                    styles['button__symbol'],
                ].join( ' ' )}>{symbol}</span>
            }
            {text && <span className={styles['button__text']}>{text}</span>}
        </button>
    )
}

export default Button