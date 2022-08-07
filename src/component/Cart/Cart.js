
import Modal from '../UI/Modal'
import styles from './Cart.module.css'

const Cart=(props)=>{
    const cartItem= <ul className={styles[`cart-items`]}>{[{
        id:'c1',
        name:'Sushi',
        amount: 2,
        price : 12.99
    }].map(item=><li>{item.name}</li>)}</ul>

return (
  
   <Modal onClick={props.onClose}>
        {cartItem}
        <div className={styles.total}>
    <span>TotalAmount</span>
    <span>25.98</span>
        </div>
        <div className={styles.actions}>
    <button onClick={props.onClose} className={styles[`button--alt`]}>Close</button>
   <button className={styles.button}>Order</button>    
        </div>
    </Modal>
    
)
}
export default Cart