import '../../App.css'
import { useContext } from 'react';
import { PizzaContext } from '../PizzaDataLoaded';

function PizzaDescription() {

    const {numberOfParticipants, howManyWillEatPizzaString} = useContext(PizzaContext)

    return (
        <div className='description'>
            There will be {numberOfParticipants} participants at the party 
            and only {howManyWillEatPizzaString} of them will eat pizza
        </div>
    );
}

export default PizzaDescription;
