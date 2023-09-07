import { formatDateUtil } from '../../utils/format-date.util'
import styles from './post-header.module.scss'

const PostHeader = ( { post } ) => {
    return (
        <header className={styles['post-header']}>
            {/* Feed */}
            <div className={styles['post-header__feed']}>
                <div className={styles['post-header__feed__container']}>
                    <span className={[
                        styles['symbols'],
                        styles['post-header__feed__symbol']
                    ].join( ' ' )}>quick_reference_all</span>
                    <span className={styles['post-header__feed__text']}>{post.feed}</span>
                </div>
                <div className={styles['post-header__feed__container']}>
                    <span className={[
                        styles['symbols'],
                        styles['post-header__feed__symbol']
                    ].join( ' ' )}>play_arrow</span>
                    <span className={styles['post-header__feed__text']}>{post.subFeed}</span>
                </div>
            </div>

            {/* Time */}
            <ul className={styles['post-header__time']}>
                <li className={styles['time__item']}>
                    <span className={[
                        styles['symbols'],
                        styles['time__item__symbol']
                    ].join( ' ' )}>schedule</span>
                </li>
                <li className={styles['time__item']}>
                    <span className={styles['time__item__text']}>{
                        formatDateUtil( post.publicationTime )
                    }</span>
                </li>
            </ul>
        </header>
    )
}

export default PostHeader