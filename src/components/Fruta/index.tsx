import axios from 'axios'
import FruitList from 'data/FruitList.json'
import { useEffect, useState } from 'react'
import styles from './Fruta.module.scss'

export default function Fruta () {

    const [fruitList, setFruitList] = useState(FruitList)

    console.log(fruitList)
    return (
        <div className={styles.Prato}>

            <div className={styles.Container}>
                <div>
                    <div className={styles.EfeitoTorcao}>
                        <img src={''} alt={''} />
                    </div>
                </div>
            </div>
            <div className={styles.Conteudo}>
                <h3>maça</h3>
                <div className={styles.Tag}>
                    fruta
                </div>
                <div>
                    nutricinal
                </div>
            </div>
        </div>
    )
}
