import { Fragment } from 'react';
import classes from './Header.module.css'
import mealsimages from '../asset/meals.jpg'

const Header=()=>{
return (
    <Fragment >
    
        <header className={classes.header} >
            <h1>Food Meal</h1>
            <button>Cart</button>
        </header>
        
    <div className={classes[`main-image`]}>
        <img src={mealsimages} alt=""/>

    </div>
    </Fragment>
)
}
export default Header;
