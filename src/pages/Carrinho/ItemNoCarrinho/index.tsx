import styles from './ItemNoCarrinho.module.scss';
import { IFruit } from 'interfaces/IFruitList';

export default function ItemNoCarrinho(props: IFruit) {

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
                    localStorage.removeItem(props.name)
                    alert('O item foi removido do carrinho')
                    window.location.reload()
                }}>
                    Remover do carrinho
                </p>

            </div>
        </div>
    );
}