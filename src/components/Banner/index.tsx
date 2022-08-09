import styles from './Banner.module.scss'
import BannerImg from "assets/Home/Banner.jpg"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__frase}>
                <h1>Hortifruti é com</h1>
                <h1 style={{ color: "#5EB14E", marginTop: 0, fontSize: '2.5rem' }}>Benfruity</h1>
            </div>
            <img className={styles.banner__img} src={BannerImg} />
        </div>
    )
}