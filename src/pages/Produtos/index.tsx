import { useState } from 'react'
import styles from './Produtos.module.scss'
import produtos from 'data/FruitList.json'
import Produto from './Produto'

export default function Produtos () {
    const [fruitList, setFruitLista] = useState(produtos)

    return(
        <div>
            {fruitList.map(item => (
                <Produto key={item.id} 
                {...item} />
            ))}
        </div>
    )
}