import '../../App.css'
import { useContext } from 'react';
import { PizzaContext } from '../PizzaDataLoaded';

function Cuts() {
    
    const {howManyWillEatPizza} = useContext(PizzaContext)
    const arr = []
    
    for (let i = 1; i <= howManyWillEatPizza / 2; i++) {
        arr.push((180 / (howManyWillEatPizza / 2)) * i)
    }
    
    return (
        <>
            {arr.map(item => <div key={item} className='cut' style={{transform: `rotate(${item}deg)`}}></div>)}
        </>
    )
}


export default Cuts;

