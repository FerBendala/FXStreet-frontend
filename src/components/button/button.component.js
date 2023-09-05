import styles from './button.module.scss'

const Button = ( { text, handleAction, type } ) => {
    return (
        <button
            type={type ? type : 'button'}
            onClick={handleAction}
            className={[
                styles['button'],
                styles['button--only-icon']
            ].join( ' ' )}
        >
            <span className={styles['button__text']}>{text}</span>
            <span className={[
                styles['symbol'],
                styles['button__icon']
            ].join( ' ' )}>&#xE8B6;</span>
            <span className={styles['button__icon']}>favorite</span>
        </button >
    )
}

export default Button