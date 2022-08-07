import { Fragment, useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/layout/Header";
import Meals from "./component/Meals/Meals";




const  App=()=> {


  const [cartIsShown,setCartIsShown]=useState(false )

  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false)
  }

  return (
    <Fragment>
      { cartIsShown && <Cart  onClose={hideCartHandler}/>}
      <Header onShow ={showCartHandler} />
      <main>
      <Meals/>
      </main>
      
            
    </Fragment>
  );
}

export default App;
