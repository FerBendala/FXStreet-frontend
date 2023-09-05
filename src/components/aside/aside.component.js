import LogoFXStreet from '../../assets/images/svg/logo-fxstreet.svg'
import styles from './aside.module.scss'

const Aside = () => (
    <aside className={styles['aside']}>
        <img src={LogoFXStreet} alt='FXStreet' />
    </aside>
)

export default Aside