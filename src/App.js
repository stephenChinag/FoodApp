import {  useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/layout/Header";
import Meals from "./component/Meals/Meals";
import CartProvider from "./component/store/CartProvider";




const  App=()=> {


  const [cartIsShown,setCartIsShown]=useState(false )

  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      { cartIsShown && <Cart  onClose={hideCartHandler}/>}
      <Header onShow ={showCartHandler} />
      <main>
      <Meals/>
      </main>
      
            
    </CartProvider>
  );
}

export default App;
