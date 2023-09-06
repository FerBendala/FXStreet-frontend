import { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

import { useDispatch, useSelector } from 'react-redux'
import { setIsDropdownVisible } from '../../redux/reducers/global-reducer'

import DropdownPanel from '../dropdown-panel/dropdown-panel.component'

import styles from './dropdown.module.scss'

const Filter = ( { dropdownItems } ) => {
    const isDropdownVisible = useSelector( state => state.global.isDropdownVisible )
    const isMobile = useMediaQuery( { maxWidth: 767 } )
    const filterRef = useRef( null ) // Get reference where is dropdown
    const dispatch = useDispatch()

    // Set if dropdown is visible
    const handleDropdown = () => {
        dispatch( setIsDropdownVisible( !isDropdownVisible ) )
    }

    // Manage clicks out of dropdown
    const handleClickOutside = ( event ) => {
        if ( filterRef.current && !filterRef.current.contains( event.target ) ) {
            dispatch( setIsDropdownVisible( false ) )
        }
    }
    useEffect( () => {
        if ( isDropdownVisible ) { document.addEventListener( 'mousedown', handleClickOutside ) }
        else { document.removeEventListener( 'mousedown', handleClickOutside ) }

        return () => document.removeEventListener( 'mousedown', handleClickOutside )
    }, [isDropdownVisible] )

    return (
        <div className={styles['filter']} ref={filterRef}>
            {/* Filter button */}
            <button
                className={styles['filter__button']}
                onClick={handleDropdown}
            >
                {!isMobile
                    ? <>
                        <span className={styles['filter__button__small']}>Show:</span>
                        <span className={styles['filter__button__text']}>All</span>
                        <span className={
                            [styles['filter__button__symbol'], styles['symbol']].join( ' ' )
                        }>
                            {isDropdownVisible ? 'keyboard_arrow_up' : 'expand_more'}
                        </span>
                    </>
                    : <span className={
                        [styles['filter__button__symbol'], styles['symbol']].join( ' ' )
                    }>filter_alt</span>
                }
            </button>

            {/* Dropdown */}
            {isDropdownVisible && <DropdownPanel items={dropdownItems} />}
        </div>
    )
}

export default Filter



// const items = [
//     { text: 'I\'m not interested in this author', input: 'radio' },
//     { text: 'I\'m not interested in this topic', input: 'radio' },
//     { text: 'I’ve seen too many posts on this topic', input: 'radio' },
//     { text: 'The information is incorrect', input: 'radio' },
//     { text: 'I’ve seen this post before', input: 'radio' },
//     { text: 'Other reasons', input: 'radio' }
// ]
// <Dropdown
//     title='Tell us why:'
//     items={items}
//     form
// />