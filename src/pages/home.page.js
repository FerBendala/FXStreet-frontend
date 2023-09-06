import useFetchData from '../hooks/use-fetch-data.hook'

import Tabs from '../components/tabs/tabs.component'

const Home = () => {
    // Fetch Data custom hook
    const { isLoading, posts } = useFetchData()

    return (
        <>
            <Tabs />
            {isLoading ? (
                <p>Cargando datos...</p>
            ) : (
                <pre>{JSON.stringify( posts, null, 2 )}</pre>
            )}
        </>
    )
}

export default Home
