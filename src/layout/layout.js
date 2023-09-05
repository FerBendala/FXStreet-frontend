import { useMediaQuery } from 'react-responsive'
import { Outlet } from 'react-router-dom'

import Aside from '../components/aside/aside.component'
import Header from '../components/header/header.component'
import MobileHeader from '../components/mobile-header/mobile-header.component'

import styles from './layout.module.scss'

const Layout = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })

    return (
        <div className={styles['layout']}>
            <Aside />
            <main className={styles['layout__main']}>
                {isMobile ? <MobileHeader /> : <Header />}
                <section className={styles['layout__main__content']}>
                    <Outlet />
                </section>
            </main>
        </div>
    )
}

export default Layout
