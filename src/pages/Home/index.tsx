import Header from "components/Header";
import Banner from "assets/Home/Banner.jpg"
import styles from "./Home.module.scss"
import Fruta from "components/Fruta";

export default function Home () {
    return(
        <div>
            <Header />

            <div className={styles.home__banner}>
                <div className={styles.home__banner__frase}>
                    <h1>Hortifruti é com</h1>
                    <h1 style={{color: "#5EB14E", marginTop:0, fontSize:'2.5rem'}}>Benfruity</h1>
                </div>
                <img className={styles.home__banner__img} src={Banner}/>
            </div>

            <div className={styles.home__recomendados}>
                <h2>Recomendamos para você</h2>
            </div>

            <Fruta />
        </div>
    )
}