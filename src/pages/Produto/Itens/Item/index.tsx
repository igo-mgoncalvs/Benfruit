import styles from './Item.module.scss';
import { useNavigate } from 'react-router-dom';
import { IFruit, IFruitList } from 'interfaces/IFruitList';
import Carrinho from 'pages/Carrinho';
import { useEffect, useState } from 'react';
import { ConstructionOutlined } from '@mui/icons-material';
import { listClasses } from '@mui/material';
import Itens from '..';

export default function Item(props: IFruit) {
    const [carrinho, setCarrinho] = useState(Number)

    useEffect(() => {
        const itensCarrinho = []

        for(let i = 1; i < localStorage.length; i++){
            itensCarrinho.push(localStorage[i])
        itensCarrinho.push(carrinho)}

    }, [carrinho])
    
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={props.img} alt={props.name} />
            </div>

            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{props.name}</h2>
                    <p>Calorias: {props.nutritions.calories} | 
                        Carboidratos: {props.nutritions.carbohydrates} | 
                        Gorduras: {props.nutritions.fat} | 
                        Proteina: {props.nutritions.protein} | 
                        Açúcares: {props.nutritions.sugar} | 
                    </p>
                </div>

                <p className={styles.item__carrinho} onClick={() => {
                    setCarrinho(props.id)
                    localStorage.setItem(`${localStorage.length}`, `${props.id}`)

                }}>
                    Adicionar ao carrinho
                </p>

            </div>
        </div>
    );
}