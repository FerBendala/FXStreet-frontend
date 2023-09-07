import { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

import DropdownPanel from '../dropdown-panel/dropdown-panel.component'

import styles from './dropdown.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setIsDropdownVisible } from '../../redux/reducers/global-reducer'

const Dropdown = ( { dropdownItems, form, symbol, title, position, dropdownId } ) => {
    const isDropdownVisible = useSelector( state => state.global.dropdowns[dropdownId] || false )

    const isMobile = useMediaQuery( { maxWidth: 992 } )
    const dropdownRef = useRef( null ) // Get reference where is dropdown
    const dispatch = useDispatch()

    useEffect( () => {
        if ( isDropdownVisible ) {
            document.addEventListener( 'mousedown', handleClickOutside )
        } else {
            document.removeEventListener( 'mousedown', handleClickOutside )
        }

        return () =>
            document.removeEventListener( 'mousedown', handleClickOutside )
    }, [isDropdownVisible] )

    // Set if dropdown is visible
    const handleDropdown = () => {
        dispatch( setIsDropdownVisible( { dropdownId, isVisible: !isDropdownVisible } ) )
    }

    // Manage clicks out of dropdown
    const handleClickOutside = ( event ) => {
        if ( dropdownRef.current && !dropdownRef.current.contains( event.target ) ) {
            dispatch( setIsDropdownVisible( { dropdownId, isVisible: false } ) )
        }
    }

    return (
        <div className={styles['dropdown']} ref={dropdownRef}>
            {/* Dropdown button */}
            <button
                className={styles['dropdown__button']}
                onClick={handleDropdown}
            >
                {symbol
                    ? <span className={[
                        styles['dropdown__button__symbol'],
                        styles['symbol']
                    ].join( ' ' )}>{symbol}</span>
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
                        }>filter_alt</span>
                }
            </button>

            {/* Dropdown */}
            {isDropdownVisible &&
                <DropdownPanel
                    items={dropdownItems}
                    form={form}
                    title={title}
                    position={position}
                />
            }
        </div>
    )
}

export default Dropdown