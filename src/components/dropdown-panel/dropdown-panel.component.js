import { useDispatch } from 'react-redux'
import { setIsDropdownVisible } from '../../redux/reducers/global-reducer'

import List from '../list/list.component'
import Form from '../form/form.component'

import styles from './dropdown-panel.module.scss'

const DropdownPanel = ( { items, title, form, position, dropdownId } ) => {
    const dispatch = useDispatch()

    const closeDropdown = () => {
        dispatch( setIsDropdownVisible( { dropdownId, isVisible: false } ) )
    }

    return (
        <div className={[
            styles['dropdown'],
            styles[`dropdown--${position}`],
        ].join( ' ' )}>
            {/* Header if exists */}
            {title &&
                <header className={styles['dropdown__header']}>
                    <button
                        className={[
                            styles['dropdown__header__button'],
                            styles['symbol']
                        ].join( ' ' )}
                        onClick={closeDropdown}
                    >
                        arrow_back
                    </button>
                    <span className={styles['dropdown__header__text']}>{title}</span>
                </header>
            }

            {/* Dropdown List */}
            <div className={styles['dropdown__list']}>
                {!form
                    ? (
                        <List
                            items={items}
                            direction='vertical'
                            dropdownId={dropdownId}
                        />
                    ) : (
                        <Form
                            items={items}
                            dropdownId={dropdownId}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default DropdownPanel