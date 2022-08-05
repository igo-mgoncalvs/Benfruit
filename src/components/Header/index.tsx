import Benfruit_Logo from "assets/BenfuitLogo.svg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Header.module.scss"

export default function Header () {
    return(
        <div className={styles.header}>
            <img src={Benfruit_Logo} className={styles.header__img}/>

            <div className={styles.header__paginas}>
                <p className={styles.header__paginas__link}>Home</p>
                <p className={styles.header__paginas__link}>Menu</p>
                <p className={styles.header__paginas__link}>Promo</p>

                <SearchIcon style={{marginLeft: 10}} />
                <AddShoppingCartIcon style={{marginLeft: 10}}/>
            </div>

        </div>
    )
}