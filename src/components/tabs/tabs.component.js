import Tab from '../tab/tab.component'
import Dropdown from '../dropdown/dropdown.component'

import styles from './tabs.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../../redux/reducers/global-reducer'

const Tabs = () => {
    const activeTab = useSelector( state => state.global.activeTab )
    const dispatch = useDispatch()

    // Filter
    const dropdownItems = [
        { text: 'Hide', symbol: 'visibility_off' },
        { text: 'Improve my feed', symbol: 'tune' },
    ]

    // Función para manejar el clic en un tab
    const handleTabClick = ( text ) => {
        dispatch( setActiveTab( text ) )
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