import React from 'react'
import './Person.css';
import AuthContext from '../../../context/auth-context';


const person = (props) => {
    console.log("**[Person.js] Rendering ..")
    
    return (
        <div className="Person">
            <AuthContext.Consumer>
                { 
                    (context) => {

                        return (
                            (context.authenticated === false)? <p> Not Logged In</p>: <p> Logged In User</p>
                        )
                    }
            }
            </AuthContext.Consumer>
            <p onClick = { props.whenClicked }>{ props.name }, {props.age} Yrs, Welcome to the Matrix!!</p>
            <p>{props.children} </p>
            {/* <input type="text" onChange= { () => { props.whenChanged(props.index, props.name ) } } value = {props.name}/> */}

            {/* old code change based on event and change all the text value not based on users choice */}
            <input type="text" onChange= { props.whenChanged  } value = {props.name}/>

        </div>
    )
     
}
export default person;

