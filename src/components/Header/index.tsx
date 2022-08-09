import Benfruit_Logo from "assets/BenfuitLogo.svg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./Header.module.scss"
import { Link } from "react-router-dom";

export default function Header () {
    const routes = [
        {
            label: 'Home',
            to: '/'
        }, {
            label: 'Produtos',
            to: '/Produtos'
        }, {
            label: <ShoppingCartIcon />,
            to: '/Carrinho'
        }
    ]
    return(
        <div className={styles.header}>
                <img src={Benfruit_Logo} className={styles.header__img}/>
                <div className={styles.header__paginas}>
                    <div>
                        {routes.map((item, index) => (
                            <Link key={index} 
                                to={item.to} 
                                className={styles.header__paginas__link}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
        </div>
    )
}