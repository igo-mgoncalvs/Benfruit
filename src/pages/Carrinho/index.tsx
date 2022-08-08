import { Value } from 'classnames'
import { IFruit, IFruitList } from 'interfaces/IFruitList'
import { useEffect, useState } from 'react'
import styles from './Carrinho.module.scss'
import produtosData from 'data/FruitList.json'
import { idText } from 'typescript'

export default function Carrinho () {
    const [itens, setItens] = useState<any[]>([])
    const [produtos, setProdutos] = useState<IFruit[]>([])
    
    useEffect(() => {
        const listaDeItens = []
        for (let i = 0; i < localStorage.length; i++) {
            listaDeItens.push(localStorage[i])
        }

        setItens(listaDeItens)

        itens.forEach(resposta => {
            setProdutos(produtosData.filter(filtro => filtro.id === resposta))
        })

        console.log(produtos)

    },[])

    return (
        <section>
            
        </section>
    )
}