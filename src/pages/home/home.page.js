import Tabs from '../../components/tabs/tabs.component'
import useFetchData from '../../hooks/use-fetch-data.hook'

import Post from '../../components/post/post.component'
import { useSelector } from 'react-redux'

import styles from './home.module.scss'

const Home = () => {
    const activeTab = useSelector( state => state.global.activeTab )
    const { isLoading, posts } = useFetchData()

    // Filtra los posts en función del tab activo
    const filteredPosts = activeTab === 'Popular'
        ? posts.filter( post => post.isPopular ).reverse()
        : posts.filter( post => !post.isPopular )

    const reversedPosts = filteredPosts.reverse()

    return (
        <div
            className={styles['home']}
            id='home'
        >
            <Tabs />
            {isLoading
                ? <p>Cargando datos...</p>
                : reversedPosts.map( ( post, index ) =>
                    <Post key={index} post={post} />
                )}
        </div>
    )
}

export default Home
