import { useState } from 'react'

import Tab from '../tab/tab.component'
import Dropdown from '../dropdown/dropdown.component'

import styles from './tabs.module.scss'

const Tabs = () => {
    // Estado local para almacenar el último tab clickeado
    const [activeTab, setActiveTab] = useState( 'Latest' )

    // Filter
    const dropdownItems = [
        { text: 'Hide', symbol: 'visibility_off' },
        { text: 'Improve my feed', symbol: 'tune' },
    ]

    // Función para manejar el clic en un tab
    const handleTabClick = ( text ) => {
        setActiveTab( text )
    }

    return (
        <div className={styles['tabs']}>
            <Tab
                text='Latest'
                active={activeTab === 'Latest'} // Aplica la clase 'active' si es el tab activo
                onClick={() => handleTabClick( 'Latest' )} // Maneja el clic en el tab
            />
            <Tab
                text='Popular'
                active={activeTab === 'Popular'} // Aplica la clase 'active' si es el tab activo
                onClick={() => handleTabClick( 'Popular' )} // Maneja el clic en el tab
            />

            {/* Filter */}
            <Dropdown
                dropdownItems={dropdownItems}
                position='bottom-left'
                dropdownId='header'
            />
        </div>
    )
}

export default Tabs