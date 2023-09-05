import List from '../list/list.component'
import FakeItem from '../fake-item/fake-item.component'

import variables from 'variablesJS'
import styles from './header.module.scss'

const Header = () => {
    // List Options
    const types = [
        ['line', variables['orange-100'], 136],
        ['circle', variables['gray-500']],
        ['circle', variables['gray-500']],
        ['all', variables['gray-500']]
    ]

    return (
        <header className={styles['header']}>
            <nav className={styles['header__container']}>
                <FakeItem
                    color={variables['blue-200']}
                    width={136}
                />

                {/* List Options */}
                <List content={types} />
            </nav>
        </header>
    )
}

export default Header