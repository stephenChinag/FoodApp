import Card from '../UI/Card';
import styles from './AvailableMeals.module.css'
import MealItem from './MealsItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Garri&Egwusi',
      description: 'African Food',
      price: 13.22,
    },
    {
      id: 'm2',
      name: 'Beans&Garri',
      description: 'For SAPA ',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Biscuit&Minerals',
      description: 'Qicky',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Pasta ',
      description: 'be wise Mange your Money',
      price: 18.99,
    },
  ];

const AvailableMeals=()=>{

    const dummMeals = DUMMY_MEALS.map(meal=><MealItem 
        id ={meal.id}
        key ={meal.id} 
        name ={meal.name}
        discription={meal.description}
        price ={meal.price}
        
        
        />)
    return(
       
             <section className={styles.meals}>
             <Card>
        <ul>{dummMeals}</ul>
           
          
        </Card>
        </section>
       

    )
}
export default AvailableMeals