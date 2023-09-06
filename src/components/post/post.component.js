import parse from 'html-react-parser'
import { formatDateUtil } from '../../utils/format-date.util'

import Dropdown from '../dropdown/dropdown.component'

import styles from './post.module.scss'

const Post = ( { post } ) => {
    const items = [
        { text: 'I\'m not interested in this author', input: 'radio' },
        { text: 'I\'m not interested in this topic', input: 'radio' },
        { text: 'I’ve seen too many posts on this topic', input: 'radio' },
        { text: 'The information is incorrect', input: 'radio' },
        { text: 'I’ve seen this post before', input: 'radio' },
        { text: 'Other reasons', input: 'radio' }
    ]


    return (
        <article className={styles['post']}>
            {/* Header */}
            <header className={styles['post__header']}>
                {/* Feed */}
                <ul className={styles['post__header__feed']}>
                    <li className={styles['feed__item']}>
                        <span className={styles['symbols']}>quick_reference_all</span>
                    </li>
                    <li className={styles['feed__item']}>
                        <span className={styles['feed__item__text']}>{post.feed}</span>
                    </li>
                    <li className={styles['feed__item']}>
                        <span className={styles['symbols']}>play_arrow</span>
                    </li>
                    <li className={styles['feed__item']}>
                        <span className={styles['feed__item__text']}>{post.subFeed}</span>
                    </li>
                </ul>

                {/* Time */}
                <ul className={styles['post__header__time']}>
                    <li className={styles['time__item']}>
                        <span className={[
                            styles['symbols'], styles['time__item__symbol']
                        ].join( ' ' )}>schedule</span>
                    </li>
                    <li className={styles['time__item']}>
                        <span className={styles['time__item__text']}>{
                            formatDateUtil( post.publicationTime )
                        }</span>
                    </li>
                </ul>
            </header>

            {/* Author */}
            <section className={styles['post__author']}>
                <img
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    className={styles['post__author__image']}
                />
                <div className={styles['post__author__content']}>
                    <ul className={styles['content__list']}>
                        <li className={styles['content__list__item']}>{post.author.name}</li>
                        <li className={styles['content__list__item']}>{post.author.companyName}</li>
                    </ul>
                    <h2 className={styles['content__title']}>{post.title}</h2>
                </div>
            </section>

            {/* Content */}
            <section className={styles['post__content']}>
                <div className={styles['content__description']}>
                    {parse( post.content )}
                </div>
                {post.imageUrl &&
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className={styles['post__content__image']}
                    />
                }
            </section>

            {/* Actions */}
            <footer className={styles['post__footer']}>
                <button className={styles['post__footer__button']}>
                    <span className={[
                        styles['symbols'],
                        styles['button__symbol'],
                    ].join( ' ' )}>favorite</span>
                    <span className={styles['button__text']}>Like</span>
                </button>
                <button className={styles['post__footer__button']}>
                    <span className={[
                        styles['symbols'],
                        styles['button__symbol'],
                    ].join( ' ' )}>bookmark</span>
                    <span className={styles['button__text']}>Save</span>
                </button>
                <Dropdown
                    title='Tell us why:'
                    dropdownItems={items}
                    icon='more_horiz'
                    form
                />
            </footer>
        </article>
    )
}

export default Post