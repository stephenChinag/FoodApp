import { Fragment } from "react";
import Header from "./component/layout/Header";
import MealsSummary from "./component/Meals/MealsSummary";


const  App=()=> {
  return (
    <Fragment>
      <Header/>
      <main>
        <MealsSummary/>
      </main>
            
    </Fragment>
  );
}

export default App;
