
import { useContext } from 'react'
import CartContex from '../store/CartContex'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'
import CartItem from './CartItem'

const Cart=(props)=>{

   const cartCtx= useContext(CartContex)

   const totalAmount=`$ ${cartCtx.totalAmount.toFixed(2)}`
    const hasItems= cartCtx.items.length>0;

    const onRemoveHandler=(id)=>{
        cartCtx.removeItem(id)

    }
    const onAddHandler=(item)=>{
        cartCtx.addItem({...item,amount:1})

    }

    const cartItem=( <ul className={styles[`cart-items`]}>
        {cartCtx.items.map(item=>(

        <CartItem 
        key ={item.id} 
        name= {item.name} 
        amount ={item.amount} 
        price={item.price} 
        onRemove={onRemoveHandler.bind(null ,item.id)} 
        onAdd={onAddHandler.bind(null,item)}/>
        ))}
        </ul>)

return (
  
   <Modal onClick={props.onClose}>
        {cartItem}
        <div className={styles.total}>
    <span>TotalAmount</span>
    <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
    <button onClick={props.onClose} className={styles[`button--alt`]}>Close</button>
   { hasItems && <button className={styles.button}>Order</button>}
        </div>
    </Modal>
    
)
}
export default Cart