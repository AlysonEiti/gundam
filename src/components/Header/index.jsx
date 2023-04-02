import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search.png'
import styles from './Header.module.scss'

export default function Header(){
    return (
        <header className={styles.header}>
            <img className={styles.header__logo} src={logo} alt="Project logo 2" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="What are you searching?" />
                <img src={search} alt="Search icon" />
            </div>
        </header>
    )
}