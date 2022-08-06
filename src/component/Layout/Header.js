import { Fragment } from "react";
import styles from './Header.module.css'
import mealsView from '../asset/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
    return(
  <Fragment>
    <header className={styles.header}>
        <h1>FoodMeal App</h1>
      <HeaderCartButton/>
       
    </header>
    <div className={styles[`main-image`]}>
        <img src={mealsView} alt='this is an MealImage  '/>
    </div>
  </Fragment>
    )
}
export default Header