
import React, { useReducer } from 'react'
import CartContex from './CartContex'


const initialCartState={
  items:[],
  totalAmount:0

}

const cartReducer= (state,action)=>{

  if (action.identifier==='ADDCART'){
    const updataeItem=state.items.concat(action.item)
    const updatedTotalAmount= state.totalAmount+ action.item.price* action.item.amount
    return{
      items:updataeItem ,
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
      dispatchCartAction({identifier:'REMOVECART',idname: id})

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