import Card from '../UI/Card';
import styles from './AvailableMeals.module.css'
import MealItem from './MealsItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
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