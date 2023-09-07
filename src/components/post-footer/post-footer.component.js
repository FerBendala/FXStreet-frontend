import { useMediaQuery } from 'react-responsive'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLiked, setIsSaved } from '../../redux/reducers/posts-reducer'

import Button from '../button/button.component'
import Dropdown from '../dropdown/dropdown.component'

import styles from './post-footer.module.scss'

const Post = ( { post } ) => {
    const dispatch = useDispatch()
    const isMobile = useMediaQuery( { maxWidth: 991 } )
    const isLiked = useSelector( ( state ) => state.postsData.isLiked )
    const isSaved = useSelector( ( state ) => state.postsData.isSaved )

    const items = [
        { text: 'I\'m not interested in this author', input: 'radio' },
        { text: 'I\'m not interested in this topic', input: 'radio' },
        { text: 'I’ve seen too many posts on this topic', input: 'radio' },
        { text: 'The information is incorrect', input: 'radio' },
        { text: 'I’ve seen this post before', input: 'radio' },
        { text: 'Other reasons', input: 'radio' },
    ]

    const toggleIsLiked = () => {
        const updatedIsLiked = isLiked.includes( post.id )
            ? isLiked.filter( ( id ) => id !== post.id )
            : [...isLiked, post.id]

        dispatch( setIsLiked( updatedIsLiked ) )
    }

    const toggleIsSaved = () => {
        const updatedIsSaved = isSaved.includes( post.id )
            ? isSaved.filter( ( id ) => id !== post.id )
            : [...isSaved, post.id]

        dispatch( setIsSaved( updatedIsSaved ) )
    }

    const isPostLiked = isLiked.includes( post.id )
    const isPostSaved = isSaved.includes( post.id )

    return (
        <footer className={styles['post-footer']}>
            <Button
                symbol='favorite'
                text='Like'
                onClick={toggleIsLiked}
                active={isPostLiked}
            />
            <Button
                symbol='bookmark'
                text='Save'
                onClick={toggleIsSaved}
                active={isPostSaved}
            />
            <Dropdown
                dropdownItems={items}
                dropdownId={post.id}
                title='Tell us why:'
                symbol='more_horiz'
                position={isMobile ? 'top-left' : 'top'}
                form
            />
        </footer>
    )
}

export default Post
