import styles from './Item.module.scss';
import { IFruit } from 'interfaces/IFruitList';

export default function Item(props: IFruit) {
    
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
                    localStorage.setItem(props.name, props.name)
                    alert('Você agora pode encontrar o produto no carrinho')
                }}>
                    Adicionar ao carrinho
                </p>

            </div>
        </div>
    );
}