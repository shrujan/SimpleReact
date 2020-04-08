import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {
    console.log("**[Persons.js] Rendering ..")
    let personBlock = null;
    console.log(props.personsList)

        personBlock = (
            props.personsList.map((person, index) => {  
                return <Person 
                        name={person.name} 
                        age={person.age}
                        index = {index }
                        key={person.id}
                        whenClicked = {  () => { return props.whenClicked( person.id) }  }  
                        whenChanged = { (event) => { return props.whenChanged(event, person.id)} }
                        ></Person>
            } )
        )
        

    console.log(personBlock)
    return (
       personBlock
    )
}

export default Persons