import { useDispatch, useSelector } from 'react-redux'
import Button from '../button/button.component'
import Dropdown from '../dropdown/dropdown.component'
import styles from './post-footer.module.scss'
import { setPosts } from '../../redux/reducers/posts-reducer'

const Post = ( { post } ) => {
    const posts = useSelector( ( state ) => state.postsData.posts )
    const dispatch = useDispatch()

    const items = [
        { text: 'I\'m not interested in this author', input: 'radio' },
        { text: 'I\'m not interested in this topic', input: 'radio' },
        { text: 'I’ve seen too many posts on this topic', input: 'radio' },
        { text: 'The information is incorrect', input: 'radio' },
        { text: 'I’ve seen this post before', input: 'radio' },
        { text: 'Other reasons', input: 'radio' }
    ]

    const toggleIsPopular = () => {
        const updatedPosts = posts.map( ( postToUpdate ) => {
            if ( postToUpdate.id === post.id ) {
                return { ...postToUpdate, isPopular: !postToUpdate.isPopular }
            }
            return postToUpdate
        } )

        dispatch( setPosts( updatedPosts ) )
    }

    return (
        <footer className={styles['post-footer']}>
            <Button
                symbol='favorite'
                text='Like'
                onClick={toggleIsPopular}
                active={post.isPopular}
            />
            <Button symbol='bookmark' text='Save' />
            <Dropdown
                dropdownItems={items}
                dropdownId={post.id}
                title='Tell us why:'
                symbol='more_horiz'
                position='bottom'
                form
            />
        </footer>
    )
}

export default Post
