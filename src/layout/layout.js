import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import Aside from '../components/aside/aside.component'
import Header from '../components/header/header.component'
import HeaderMobile from '../components/header-mobile/header-mobile.component'
import Widget from '../components/widget/widget.component'

import styles from './layout.module.scss'

const Layout = () => {
    const isMobile = useMediaQuery( { maxWidth: 767 } )

    return (
        <div className={styles['layout']}>
            <Aside />
            <main className={styles['layout__main']}>
                {!isMobile ? <Header /> : <HeaderMobile />}
                <section className={styles['layout__main__content']}>
                    <div className={styles['content']}>
                        <Outlet />
                    </div>
                    {!isMobile && <Widget />}
                </section>
            </main>
        </div>
    )
}

export default Layout
