import styles from './Produtos.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Ordenador from './Ordernador';
import Itens from './Itens';

export default function Produtos() {
    const [busca, setBusca] = useState('');
    const [ordenador, setOrdenador] = useState('');
    return (
        <section className={styles.produtos}>
            
            <div className={styles.produtos__filtros}>
            <Buscador busca={busca} setBusca={setBusca} />
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
            </div>

            <Itens 
                busca={busca}
                ordenador= {ordenador}/>
        </section>
    );
}