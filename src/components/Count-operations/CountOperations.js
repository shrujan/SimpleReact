import React from 'react';
import './CountOperations.css'

const CountOperations = (props) =>  {

        return (
            <div className="count-operations" onClick={ props.whenClicked }>
                { props.operationName }
            </div>
        )
}

export default CountOperations;