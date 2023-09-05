import List from '../list/list.component'

import LogoFXStreet from '../../assets/images/logo-fxstreet-m.svg'

import variables from 'variablesJS'
import styles from './mobile-header.module.scss'

const MobileHeader = () => {
    // List Options
    const types = [
        ['circle', variables['gray-300']],
        ['circle', variables['gray-300']]
    ]

    return (
        <header className={styles['header']}>
            <nav className={styles['header__container']}>
                <img
                    src={LogoFXStreet}
                    alt='FXStreet'
                    className={styles['header__logo']}
                />

                {/* List Options */}
                <List content={types} />
            </nav>
        </header>
    )
}

export default MobileHeader