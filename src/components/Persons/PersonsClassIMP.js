import React, { Component }  from 'react';
import Person from './Person/Person'

class Persons extends Component {

    // since we dont have initial state we can comment it to ignore warning
    // static getDerivedStateFromProps (props, state) {
    //     console.log('***[Persons]:getDerivedStateFromProps ')
    //     return state
    // }

    shouldComponentUpdate(nextProp, nextState) {
        console.log('***[Persons]:shouldComponentUpdate ');
        // true lets you update the component, false stops component update
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('***[Persons]:getSnapshotBeforeUpdate ');

        return { message: "sheetal"}
    }

    // get trigged when there is some update in state
    componentDidUpdate(prevProp, prevState, snapshot) {
        console.log('***[Persons]:componentDidUpdate ');
        console.log(snapshot); //should print the data returned from getSnapshotBeforeUpdate


    }

    render () {
        console.log("**[Persons.js] Rendering ..")
        let personBlock = null;
        console.log(this.props.personsList)
    
            personBlock = (
                this.props.personsList.map((person, index) => {  
                    return <Person 
                            name={person.name} 
                            age={person.age}
                            index = {index }
                            key={person.id}
                            whenClicked = {  () => { return this.props.whenClicked(person.id) }  }  
                            whenChanged = { (event) => { return this.props.whenChanged(event, person.id)} }
                            >
                                children content
                            </Person>
                } )
            )
            
    
        console.log(personBlock)
        return (
           personBlock
        )
    }
   
}

export default Persons