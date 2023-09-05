import { Outlet } from 'react-router-dom'

import Aside from '../components/aside/aside.component'
import Header from '../components/header/header.component'

import styles from './layout.module.scss'

const Layout = () => {
    return (
        <div className={styles['layout']}>
            <Aside />
            <main className={styles['main']}>
                <Header />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
