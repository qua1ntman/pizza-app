import '../../App.css'
import { useContext } from 'react';
import { PizzaContext } from '../PizzaDataLoaded';

function PizzaTitle() {

    const {howManyWillEatPizzaString, pizza} = useContext(PizzaContext)

    return (
        <div className="pizza-title">
            Pizza {pizza.type} "{pizza.name}" for {howManyWillEatPizzaString} 
        </div>
    )
}

export default PizzaTitle;
