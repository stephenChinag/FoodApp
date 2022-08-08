import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContex from "../store/CartContex";
import  styles from './HeaderCartButton.module.css'








const HeaderCartButton=(props)=>{

   
    const cartCtx = useContext(CartContex)

  const numberOfCartItems = cartCtx.items.reduce((total, item)=>{
      return total + item.amount;
  },0 )

    return(
        <button onClick={props.onClick}  className={styles.button}>
         <span className={styles.icon}>
            <CartIcon/>
            </span>
         <span className={styles.bump}>Your Cart</span>
         <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
     
    )

}
export default HeaderCartButton;