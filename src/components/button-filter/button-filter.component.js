import { useMediaQuery } from 'react-responsive'

import styles from './button-filter.module.scss'

const FilterIcon = ( { isDropdownVisible, onClick } ) => {
    // Get media query to define component content
    const showTextAndSymbol = useMediaQuery( { maxWidth: 992 } )

    // Symbol class and type
    const symbolClass = `${styles['filter-icon__symbol']} ${styles['symbol']}`
    const chevronSymbol = isDropdownVisible ? 'keyboard_arrow_up' : 'expand_more'

    return (
        <button
            className={styles['filter-icon']}
            onClick={onClick}
        >
            {!showTextAndSymbol
                ? (
                    <>
                        <span className={styles['filter-icon__small']}>Show:</span>
                        <span className={styles['text']}>All</span>
                        <span className={symbolClass}>{chevronSymbol}</span>
                    </>
                ) : (
                    <span className={symbolClass}>filter_alt</span>
                )
            }
        </button>
    )
}

export default FilterIcon