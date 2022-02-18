import '../App.css';
import { useContext } from 'react';
import { AppContext } from './../App';

function LoadButton () {
    
    const {setIsDataLoading, isReload, setIsReload, startFirstLoad, setStartFirstLoad} = useContext(AppContext)

    function handleStatesChange () {
        if (startFirstLoad) {
            setIsReload(!isReload)
            setStartFirstLoad(false)
        } else {
            setIsReload(!isReload)
            setIsDataLoading(true)
            setStartFirstLoad(false)
        }
    }

    return (
        <button className='load-party-button' onClick={() => handleStatesChange()}>Load party</button>
    )
}

export default LoadButton