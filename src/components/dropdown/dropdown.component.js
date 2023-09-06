import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import DropdownPanel from '../dropdown-panel/dropdown-panel.component'

import styles from './dropdown.module.scss'

const Dropdown = ( { dropdownItems, form, icon, title } ) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState( false )
    const isMobile = useMediaQuery( { maxWidth: 767 } )
    const dropdownRef = useRef( null ) // Get reference where is dropdown

    // Set if dropdown is visible
    const handleDropdown = () => {
        setIsDropdownVisible( !isDropdownVisible )
    }

    // Manage clicks out of dropdown
    const handleClickOutside = ( event ) => {
        if ( dropdownRef.current && !dropdownRef.current.contains( event.target ) ) {
            setIsDropdownVisible( false )
        }
    }
    useEffect( () => {
        if ( isDropdownVisible ) { document.addEventListener( 'mousedown', handleClickOutside ) }
        else { document.removeEventListener( 'mousedown', handleClickOutside ) }

        return () => document.removeEventListener( 'mousedown', handleClickOutside )
    }, [isDropdownVisible] )

    return (
        <div className={styles['dropdown']} ref={dropdownRef}>
            {/* Dropdown button */}
            <button
                className={styles['dropdown__button']}
                onClick={handleDropdown}
            >
                {icon
                    ? <span className={[
                        styles['dropdown__button__symbol'],
                        styles['symbol']
                    ].join( ' ' )}>{icon}</span>
                    : !isMobile
                        ? <>
                            <span className={styles['dropdown__button__small']}>Show:</span>
                            <span className={styles['dropdown__button__text']}>All</span>
                            <span className={[
                                styles['dropdown__button__symbol'],
                                styles['dropdown__button__symbol--small'],
                                styles['symbol']
                            ].join( ' ' )}>
                                {isDropdownVisible ? 'keyboard_arrow_up' : 'expand_more'}
                            </span>
                        </>
                        : <span className={
                            [styles['dropdown__button__symbol'], styles['symbol']].join( ' ' )
                        }>dropdown_alt</span>
                }
            </button>

            {/* Dropdown */}
            {isDropdownVisible &&
                <DropdownPanel
                    items={dropdownItems}
                    form={form}
                    title={title}
                />
            }
        </div>
    )
}

export default Dropdown