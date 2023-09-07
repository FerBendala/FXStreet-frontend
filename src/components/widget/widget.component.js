import FakeItem from '../fake-item/fake-item.component'

import variables from 'variablesJS'
import styles from './widget.module.scss'

const Widget = () => {
    return (
        <div className={styles['widget']}>
            <div className={styles['widget__positive']}>
                <FakeItem
                    type='line'
                    width='100%'
                    color={variables['white']}
                />
                <FakeItem
                    type='line'
                    width='60%'
                    color={variables['white']}
                />
            </div>
            <div className={styles['widget__negative']}>
                <FakeItem
                    type='all-reverse'
                    width={109}
                    color={variables['blue-200']}
                />
            </div>
        </div>
    )
}

export default Widget