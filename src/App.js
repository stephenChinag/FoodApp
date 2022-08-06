import { Fragment } from "react";
import Header from "./component/layout/Header";
import Meals from "./component/Meals/Meals";
import MealsSummary from "./component/Meals/MealsSummary";


const  App=()=> {
  return (
    <Fragment>
      <Header/>
      <main>
        <MealsSummary/>
      </main>
      <Meals/>
            
    </Fragment>
  );
}

export default App;
