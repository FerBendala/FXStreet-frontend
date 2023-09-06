import List from '../list/list.component'
import Form from '../form/form.component'

import styles from './dropdown-panel.module.scss'

const DropdownPanel = ( { items, title, form } ) => {
    return (
        <div className={styles['dropdown']}>
            {/* Header if exists */}
            {title &&
                <header className={styles['dropdown__header']}>
                    <span className={[
                        styles['dropdown__header__symbol'],
                        styles['symbol']
                    ].join( ' ' )}>
                        arrow_back
                    </span>
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
                        />
                    ) : (
                        <Form items={items} />
                    )
                }
            </div>

            {/* <ul className={styles['dropdown__list']}>
                {items.map( ( item, index ) => (
                    <li
                        key={index}
                        className={styles['dropdown__list__item']}
                    >
                        <span className={[styles['item__symbol'], styles['symbol']].join( ' ' )}>
                            {item.symbol}
                        </span>
                        <span className={styles['item__text']}>
                            {item.text}
                        </span>
                    </li>
                ) )}
            </ul> */}
        </div>
    )
}

export default DropdownPanel