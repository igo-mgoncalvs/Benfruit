import axios from 'axios'
import FruitList from 'data/FruitList.json'
import { useEffect, useState } from 'react'
import styles from './Fruta.module.scss'

export default function Fruta () {

    const [fruitList, setFruitList] = useState(FruitList)
    return (
        <div className={styles.carrinho}>
            <h3>Carrinho</h3>
        </div>
    )
}
