
import React, { useReducer } from 'react'
import CartContex from './CartContex'


const initialCartState={
  items:[],
  totalAmount:0

}

const cartReducer= (state,action)=>{

  if (action.identifier==='ADDCART'){
    const updatedTotalAmount= state.totalAmount+ action.item.price* action.item.amount
    
    
    const exitingCartItemIndex = state.items.findIndex(
    item=>item.id === action.item.id)
      const existingCartItem=state.items[exitingCartItemIndex]
     
      let updatedItems;

      if (existingCartItem){
        const updatedItem={
          ...existingCartItem,
          amount:existingCartItem.amount + action.item.amount
        }
        updatedItems=[...state.items]
        updatedItems[exitingCartItemIndex]=updatedItem;
      }else{
       
        updatedItems=state.items.concat(action.item)

      }

   

     
    return{
      items:updatedItems ,
      totalAmount:updatedTotalAmount
    }

  }
  if (action.identifier==='REMOVECART'){
        const exitingCartItemIndex = state.items.findIndex(
          (item)=> item.id ===action.id)

          const existingCartItem=state.items[exitingCartItemIndex]
          const updatedTotalAmount= state.totalAmount-existingCartItem.price
          let updatedItems;
          if (existingCartItem.amount === 1){
            updatedItems=state.items.filter(item=>item.id !==action.id)
          }else{
            const updatedItem= {...existingCartItem, amount: existingCartItem.amount-1}
            updatedItems=[...state.items];
            updatedItems[exitingCartItemIndex]=updatedItem;
          }
          return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
          }
  }
  return initialCartState 
}

const CartProvider=(props)=> {

const[cartState, dispatchCartAction]=  useReducer(cartReducer, initialCartState)

    const addItemHandler=(item)=>{
      dispatchCartAction({identifier:'ADDCART',item: item})


    }

    const removeItemHandler=(id)=>{
      dispatchCartAction({identifier:'REMOVECART',id: id})

    }

  const cartContext={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemHandler ,
    removeItem: removeItemHandler
  }
    return (
        <CartContex.Provider value={cartContext}>
            {props.children}
        </CartContex.Provider>
    
  )
}


export default CartProvider