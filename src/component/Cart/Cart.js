import styles from './Cart.module.css'

const Cart=(props)=>{
    const cartItem= <ul className={styles[`cart-items`]}>{[{
        id:'c1',
        name:'Sushi',
        amount: 2,
        price : 12.99
    }].map(item=><li>{item.name}</li>)}</ul>

return (
    <div>
        {cartItem}
        <div className={styles.total}>
    <span>TotalAmount</span>
    <span>25.98</span>
        </div>
        <div className={styles.action}>
    <button className={styles[`button--alt`]}>Close</button>
   <button className={styles.button}>Order</button>    
        </div>
    </div>
)
}
export default Cart