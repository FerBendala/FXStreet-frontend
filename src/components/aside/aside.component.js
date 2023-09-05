import List from '../list/list.component'

import LogoFXStreet from '../../assets/images/logo-fxstreet.svg'

import variables from 'variablesJS'
import styles from './aside.module.scss'

const Aside = () => {
    // List Options
    const types = [
        ['line', variables['white'], 111],
        ['line', variables['gray-300'], 111],
        ['line', variables['gray-300'], 111],
        ['line', variables['gray-300'], 111],
        ['line', variables['gray-300'], 111]
    ]

    return (
        <aside className={styles['aside']}>
            {/* Logo */}
            <img
                src={LogoFXStreet}
                alt='FXStreet'
                className={styles['aside__logo']}
            />

            {/* List Options */}
            <List content={types} direction='vertical' />
        </aside>
    )
}

export default Aside
