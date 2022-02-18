import '../../App.css';
import PayButton from './PayButton';
import { useState, useContext } from 'react';
import { PizzaContext } from './../PizzaDataLoaded';

const ACTIONS = {
    PAY: 'pay',
    PAID: 'paid',
}

function TableRow({person, moneyToCollect, setMoneyToCollect, setMoneyCollected, moneyCollected}) {
    
    const {cost, howManyWillEatPizza} = useContext(PizzaContext)
    const needToPay = cost/howManyWillEatPizza
    const [howMuchToPay, setHowMuchToPay] = useState((needToPay))
    const [buttonTypeState, setButtonTypeState] = useState(ACTIONS.PAY)

    
    function ButtonDataChange() {
        if (buttonTypeState === ACTIONS.PAID) {
            setMoneyCollected(moneyCollected - needToPay)
            setMoneyToCollect(moneyToCollect + needToPay)
            setHowMuchToPay(needToPay)
            setButtonTypeState(ACTIONS.PAY)
        } else if (buttonTypeState === ACTIONS.PAY) {
            setMoneyCollected(moneyCollected + needToPay)
            setMoneyToCollect(moneyToCollect - needToPay)
            setHowMuchToPay(0)
            setButtonTypeState(ACTIONS.PAID)
        }
    }

    return (
        <tr>
            <td style={person.isVegan ? { color: 'rgb(128, 255, 0)'} : null}>{person.name}</td>
            <td>{howMuchToPay.toFixed(1)} BYN</td>
            <td>
                <PayButton 
                    buttonTypeState={buttonTypeState}
                    ButtonDataChange={ButtonDataChange}
                />
            </td>
        </tr>   
    );
}

export default TableRow
