import React, { Component } from 'react'
import './Person.css'

class Person extends Component  {
    
    render() {
        console.log("**[Person.js] class Rendering ..")

        return (
            <div className="Person">
                <p onClick = { this.props.whenClicked }>{ this.props.name }, {this.props.age} Yrs, Welcome to the Matrix!!</p>
                <p>{this.props.children} </p>
                {/* <input type="text" onChange= { () => { this.props.whenChanged(this.props.index, this.props.name ) } } value = {this.props.name}/> */}
    
                {/* old code change based on event and change all the text value not based on users choice */}
                <input type="text" onChange= { this.props.whenChanged  } value = {this.props.name}/>
    
            </div>
        )
    }
    
     
}
export default Person;

