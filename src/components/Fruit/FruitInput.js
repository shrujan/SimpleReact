import React from 'react';
import './fruit.css'

const FruitForm = (props) => {

    return (
        <div>
            <form  onSubmit={ props.whenSaved }>
                <input 
                    placeholder="Enter fruit name"
                    className="fruit-input" 
                    type="text" 
                    value={props.value} 
                    onChange={ props.whenChanged }></input>
                <input className="fruit-submit" type="submit" value="Submit" />
            </form>
        </div>
    )
      

}

export default FruitForm