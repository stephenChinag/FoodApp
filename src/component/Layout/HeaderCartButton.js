import CartIcon from "../Cart/CartIcon";
import  styles from './HeaderCartButton.module.css'
const HeaderCartButton=(props)=>{
    return(
        <button onClick={props.onClick}  className={styles.button}>
         <span className={styles.icon}><CartIcon/></span>
         <span className={styles.bump}>Your Cart</span>
         <span className={styles.badge}>2</span>
        </button>
     
    )

}
export default HeaderCartButton;