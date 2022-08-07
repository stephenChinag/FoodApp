import React from 'react'



const  addItemHandler =()=>{

}

const CartContex = React.createContext({


    items:[],
    totalAmount:0,
    addItem: (item)=>{},
    removeItem:(id)=>{}
     
})

export default CartContex;