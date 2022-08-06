import CartIcon from "../Cart/CartIcon";
import  styles from './HeaderCartButton.module.css'
const HeaderCartButton=()=>{
    return(
        <button className={styles.button}>
         <span className={styles.icon}><CartIcon/></span>
         <span className={styles.bump}><h3>Your Cart</h3></span>
         <span className={styles.badge}>2</span>
        </button>
    )

}
export default HeaderCartButton;