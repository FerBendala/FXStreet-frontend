import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsDropdownVisible } from '../../redux/reducers/global-reducer'

import DropdownPanel from '../dropdown-panel/dropdown-panel.component'
import ButtonFilter from '../button-filter/button-filter.component'

import styles from './dropdown.module.scss'

const Dropdown = ( { dropdownItems, form, symbol, title, position, dropdownId } ) => {
    const isDropdownVisible = useSelector( state => state.global.dropdowns[dropdownId] || false )

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
            {symbol
                ? <button
                    className={styles['dropdown__button']}
                    onClick={handleDropdown}
                >
                    <span className={[
                        styles['dropdown__button__symbol'],
                        styles['symbol']
                    ].join( ' ' )}>{symbol}</span>
                </button>
                : <ButtonFilter
                    isDropdownVisible={isDropdownVisible}
                    onClick={handleDropdown}
                />
            }

            {/* Dropdown */}
            {isDropdownVisible &&
                <DropdownPanel
                    items={dropdownItems}
                    form={form}
                    title={title}
                    position={position}
                    dropdownId={dropdownId}
                />
            }
        </div>
    )
}

export default Dropdown