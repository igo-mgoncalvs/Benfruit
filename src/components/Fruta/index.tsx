import { IFruit } from 'interfaces/IFruitList';
import styles from './Fruta.module.scss';

export default function Fruta(item: IFruit) {
  return (
    <div className={styles.Prato}>
      <div className={styles.Container}>
        <div>
          <div className={styles.EfeitoTorcao}>
            <img src={item.img} alt={item.name} />
          </div>
        </div>
      </div>
      <div className={styles.Conteudo}>
        <h3>{item.name}</h3>
        <div>
          <p>Calorias: {item.nutritions.calories} |
            Carboidratos: {item.nutritions.carbohydrates} |
            Gorduras: {item.nutritions.fat} |
            Proteina: {item.nutritions.protein} |
            Açúcares: {item.nutritions.sugar} |
          </p>

          <p className={styles.carrinho} onClick={() => {
                      localStorage.setItem(item.name, item.name)
                      alert('Oproduto já está no carrinho')
                  }}>
                      Adicionar ao carrinho
                  </p>
        </div>
      </div>
    </div>
  )
}