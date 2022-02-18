import '../../App.css'
import { useState, useContext } from 'react'
import TableRow from './TableRow'
import { PizzaContext } from './../PizzaDataLoaded'

export default function Table () {

    const {preferencies, cost} = useContext(PizzaContext)
    const [moneyToCollect, setMoneyToCollect] = useState(cost)
    const [moneyCollected, setMoneyCollected] = useState(cost-moneyToCollect)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Share to pay</th>
                    <th>Pay</th>
                </tr>
            </thead>
            <tbody>
                {preferencies.map(person => 
                    <TableRow 
                        key={person.name}
                        person={person} 
                        cost={cost} 
                        moneyToCollect={moneyToCollect} 
                        setMoneyToCollect={setMoneyToCollect} 
                        setMoneyCollected={setMoneyCollected}
                        moneyCollected={moneyCollected}
                    />
                )}
                <tr>
                    <td>Total order</td>
                    <td>{cost.toFixed(1)} BYN</td>
                    <td></td>
                </tr> 
                <tr>
                    <td>Money to collect</td>
                    <td>{moneyToCollect.toFixed(1)} BYN</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Money collected</td>
                    <td>{moneyCollected.toFixed(1)} BYN</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}