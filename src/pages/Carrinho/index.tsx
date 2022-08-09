import { useEffect, useState } from 'react'
import styles from './Carrinho.module.scss'
import produtosData from 'data/FruitList.json'

import ItemNoCarrinho from './ItemNoCarrinho'

export default function Carrinho () {
    const [produtos, setProdutos] = useState<any[]>([])
    
    useEffect(() => {
        const listaDeItens = Object.keys(localStorage)
        const listaCarrinho = []
        for (let i = 0; i < listaDeItens.length; i++) {
            listaCarrinho.push(produtosData.find(find => find.name === listaDeItens[i]))
        }
        setProdutos(listaCarrinho)        
    }, [])

    function verificaCarrinho() {
        if(produtos.length < 1){
            return (
                <h1>Parece que você ainda não tem nenhum item no carrinho</h1>
            )
        } else {
            return (
                <div>
                    {produtos.map((item, key) => (
                        <ItemNoCarrinho key={key}
                        numberList={key}
                        {...item}/>
                    ))}
                </div>
            )
        }
    }

    return (
        <section className={styles.carrinho}>
            {verificaCarrinho()}
        </section>
    )
}