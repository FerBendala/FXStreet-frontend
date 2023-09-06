import useFetchData from '../hooks/use-fetch-data.hook'

import Post from '../components/post/post.component'

const Home = () => {
    // Fetch Data custom hook
    const { isLoading, posts } = useFetchData()

    return isLoading
        ? <p>Cargando datos...</p>
        : posts.map( ( post, index ) => {
            return (
                <Post key={index} post={post} />
            )
        } )
}

export default Home
