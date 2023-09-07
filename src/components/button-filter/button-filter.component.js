import { useMediaQuery } from 'react-responsive'

import styles from './button-filter.module.scss'

const FilterIcon = ( { isDropdownVisible, onClick } ) => {
    const isMobile = useMediaQuery( { maxWidth: 992 } )

    return (
        <button
            className={styles['filter-icon']}
            onClick={onClick}
        >
            {!isMobile
                ? <>
                    <span className={styles['filter-icon__small']}>Show:</span>
                    <span className={styles['text']}>All</span>
                    <span className={[
                        styles['filter-icon__symbol'],
                        styles['filter-icon__symbol--small'],
                        styles['symbol']
                    ].join( ' ' )}>
                        {isDropdownVisible ? 'keyboard_arrow_up' : 'expand_more'}
                    </span>
                </>
                : <span className={
                    [styles['filter-icon__symbol'], styles['symbol']].join( ' ' )
                }>filter_alt</span>
            }
        </button>
    )
}

export default FilterIcon