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
        </div>
    )
}

export default DropdownPanel