import React from 'react';
import './CounterOutput.css';

const CounterOuput = (props) => {
    
    return (
        <div className= "counter-output">
            Total Count { props.totalCount }
        </div>
    )
}

export default CounterOuput