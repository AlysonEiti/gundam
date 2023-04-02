import Icon from './Icon';
import styles from './Menu.module.scss'
import icons from './icons.json';

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__list}>
            {
                icons.map(icon => {
                    return (
                        <Icon 
                            key={icon.id} 
                            icon={icon} 
                            styles={styles}
                        />
                    )
                })
            }
        </ul>
    </nav>
  )
}
