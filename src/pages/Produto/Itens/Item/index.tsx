import styles from './Item.module.scss';
import { useNavigate } from 'react-router-dom';
import { IFruitList } from 'interfaces/IFruitList';

export default function Item(props: IFruitList) {
    const navigate = useNavigate();
    return (
        <div className={styles.item} onClick={() => navigate(`/prato/${props.id}`)}>
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
            </div>
        </div>
    );
}