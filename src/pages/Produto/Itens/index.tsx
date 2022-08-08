import produtos from 'data/FruitList.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';
import { OrdenarFruitList } from 'interfaces/IFruitList';

interface Props {
    busca: string;
    ordenador: string;
}

export default function Itens (props: Props) {
    const [lista, setLista] = useState(produtos);
    const { busca, ordenador } = props;

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }

    function ordenar(novaLista: OrdenarFruitList){
        switch(ordenador) {
        case 'calorias': 
            return novaLista.sort((a, b) => a.nutritions.calories > b.nutritions.calories  ? 1: -1);
        case 'carboidratos':
            return novaLista.sort((a, b) => a.nutritions.carbohydrates > b.nutritions.carbohydrates ? 1 : -1);
        case 'gorduras':
            return novaLista.sort((a, b) => a.nutritions.fat > b.nutritions.fat ? 1 : -1);
        case 'proteina':
            return novaLista.sort((a, b) => a.nutritions.protein > b.nutritions.protein ? 1 : -1);
        case 'acucar':
        return novaLista.sort((a, b) => a.nutritions.sugar > b.nutritions.sugar ? 1 : -1);

        default:
            return novaLista;
        }
    }

    useEffect(() => {
        const novaLista = produtos.filter(item => testaBusca(item.name));
        setLista(ordenar(novaLista));
    }, [busca, ordenador]);

    return (
        <div className={styles.itens}>
            {lista.map((item) => (
                <Item 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    );
}