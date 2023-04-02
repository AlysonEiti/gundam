import banner from '../../assets/images/banner.jpg'
import styles from './Banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <h1>...</h1>
        <img src={banner} alt="The image of earth see from space" />
    </div>
  )
}
