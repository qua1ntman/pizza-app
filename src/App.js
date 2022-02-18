import './App.css'
import { useState, createContext } from 'react'
import LoadButton from './Parts/LoadButton'
import PizzaDataLoaded from './Parts/PizzaDataLoaded'

export const AppContext = createContext()

function App() {

  const [isReload, setIsReload] = useState(false)
  const [startFirstLoad, setStartFirstLoad] = useState(true)
  const [isDataLoading, setIsDataLoading] = useState(true)

  return (
    <div className="App">
      <AppContext.Provider value={{
        isReload, setIsReload,
        startFirstLoad, setStartFirstLoad,
        isDataLoading, setIsDataLoading
      }}>
        <LoadButton isDataLoading={isDataLoading} setIsDataLoading={setIsDataLoading} isReload={isReload} setIsReload={setIsReload} startFirstLoad={startFirstLoad} setStartFirstLoad={setStartFirstLoad} />
        {startFirstLoad 
        ? <p>Click 👆 this button</p>
        : <PizzaDataLoaded isReload={isReload} startFirstLoad={startFirstLoad} isDataLoading={isDataLoading} setIsDataLoading={setIsDataLoading}/>
        }
      </AppContext.Provider>
    </div>
  );
}

export default App;