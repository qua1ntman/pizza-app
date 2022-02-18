import '../../App.css'

function PayButton ({buttonTypeState, ButtonDataChange}) {

    return ( 
        <button 
            className={buttonTypeState} 
            onClick={() => ButtonDataChange()}
        >
            {buttonTypeState.toUpperCase()}
        </button>
    )
}

export default PayButton