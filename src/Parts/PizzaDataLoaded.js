import '../App.css';
import { useState, useEffect, createContext, useContext} from 'react'
import PizzaTitle from './PizzaAbout/PizzaTitle'
import Pizza from './PizzaAbout/Pizza';
import PizzaDescription from './PizzaAbout/PizzaDescription';
import Table from './Table/Table';
import numberToString from './Instruments/NumberToWordsChange';
import { AppContext } from './../App';

export const PizzaContext = createContext()

function PizzaDataLoaded () {

    const {isDataLoading, setIsDataLoading, isReload} = useContext(AppContext)
    const [numberOfParticipants, setNumberOfParticipants] = useState()
    const [howManyWillEatPizza, setHowManyWillEatPizza] = useState(0)
    const [preferencies, setPreferencies] = useState([])
    const [pizzaType, setPizzaType] = useState('')
    const [cost, setCost] = useState(0)
    const [pizza, setPizza] = useState({})
    
    // Check participants and their diet
    useEffect(() => {
        fetch("https://gp-js-test.herokuapp.com/pizza")
        .then((response) => response.json())
        .then((data) => {
            let all = data.party.length;
            setNumberOfParticipants(all)
            let willEat = data.party.filter(
                (participant) => participant.eatsPizza === true
            );
            setHowManyWillEatPizza(willEat.length)
            let fetchString = 'https://gp-js-test.herokuapp.com/pizza/world-diets-book/'
            willEat.forEach(el => {
                fetchString+=`${el.name},`
            });
            fetchString = fetchString.split(' ').join('%20').slice(0, -1)
            return fetch(fetchString)
        })
        .then((fetchString) => fetchString.json())
        .then((data) => {
            setPreferencies(data.diet)
            return data.diet
            })
        .then((pizzaChoose) => {
            if (pizzaChoose.filter(person => person.isVegan === true).length < pizzaChoose.length/2) {
                setPizzaType('meat')
            } else {
                let whatVeganPizza = Math.random()
                setPizzaType(whatVeganPizza < .5  ? 'cheese' : 'vegan')
            }
            console.log(123)
            
        })  
    }, [isReload])

    // Order pizza and convert currency
    useEffect(() => {
        Promise.all([
            fetch(`https://gp-js-test.herokuapp.com/pizza/order/${pizzaType}/${howManyWillEatPizza}`)
            .then(response => response.json()),

            fetch(`https://gp-js-test.herokuapp.com/pizza/currency`)
            .then(response => response.json()) 
        ]).then(([pizzaData, currency]) => {
            const pizzaPrice = pizzaData.price.split(' ')
            if (pizzaPrice[1] === 'BYN') {
                setCost(parseFloat(pizzaPrice[0]))
            } else if (pizzaData.price.split(' ')[1] === 'USD') {
                setCost((parseFloat(pizzaPrice[0])*currency.USD))
            } else if (pizzaData.price.split(' ')[1] === 'EUR') {
                setCost((parseFloat(pizzaPrice[0])*currency.EUR))
            }
            setIsDataLoading(false)
            setPizza(pizzaData)
            console.log(321321)
        })
    }, [pizzaType])  

    return (
        isDataLoading
        ? <div className='waiting'>Waiting...</div>
        : <div className='pizza-container'>
            <PizzaContext.Provider value={{
                howManyWillEatPizzaString: numberToString(howManyWillEatPizza),
                pizza, howManyWillEatPizza,
                numberOfParticipants, preferencies, cost
            }}>
                <PizzaTitle />
                <Pizza />
                <PizzaDescription />
                <Table /> 
            </PizzaContext.Provider>
        </div>                
    )
}

export default PizzaDataLoaded