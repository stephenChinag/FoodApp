import React, { useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import CartContex from "../store/CartContex";
import  styles from './HeaderCartButton.module.css'




const HeaderCartButton=(props)=>{

  const [btnIsHilghted ,setBtnIsHighlited]=useState()
   
    const cartCtx = useContext(CartContex)

  const numberOfCartItems = cartCtx.items.reduce((total, item)=>{
      return total + item.amount;
  },0 )

    const btnClasses=`${styles.button} ${styles.bump}`
  
  
    useEffect(()=>{

   },[])
    

    return(
        <button onClick={props.onClick}  className={btnClasses}>
         <span className={styles.icon}>
            <CartIcon/>
            </span>
         <span className={styles.bump}>Your Cart</span>
         <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
     
    )

}
export default HeaderCartButton;