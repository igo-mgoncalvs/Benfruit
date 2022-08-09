import Fruta from "components/Fruta"
import styles from "./Home.module.scss"
import produtos from "data/FruitList.json";

export default function Home () {
    let pratosRecomendados = [...produtos];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
    console.log(pratosRecomendados)
    return(
        <div>
            <div className={styles.home__recomendados}>
                <h2>Recomendamos para você</h2>
                <div className={styles.home__recomendados__produtos}>
                    {pratosRecomendados.map((item, index) => (
                        <Fruta numberList={index} {...item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}