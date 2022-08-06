import { IFruit } from 'interfaces/IFruit'
import { IFruitList } from 'interfaces/IFruitList'
import styles from './Produto.module.scss'
import produtos from 'data/FruitList.json'

export default function Produto (item: IFruitList) {
    return(
        <div className={styles.item} /*onClick={() => navigate(`/prato/${id}`)}*/>
            <div className={styles.item__imagem}>
                <img src={item.img} alt="imagem" />
            </div>

            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{item.name}</h2>
                    <p>Calorias: {item.nutritions.calories} |
                        Carboidratos: {item.nutritions.carbohydrates} |
                        Gorduras: {item.nutritions.fat} |
                        Proteinas: {item.nutritions.protein} |
                        Açucares: {item.nutritions.sugar} 
                    </p>
                </div>
            </div>
        </div>
    )
}