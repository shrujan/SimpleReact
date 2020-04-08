import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Per from './Person/Person'; // first char should be capital -- works
import Person from './Person/Person'; // first char should be capital
import Fruit from './Fruit/Fruit';


const App = (props) => {
  // state = {
  //     persons: [
  //         { name: 'raju', age: 28 },
  //         { name: 'saju', age: 49}
  //     ]
  // }

  // mixName = () => {
  // // works with ES6 arrow function only

  //   this.setState( {
  //     persons: [
  //         { name: 'ramesh', age: 28 },
  //         { name: 'suresh', age: 49}
  //     ]
  //   } )
  // }

  const [ personState, setPersonState ] = useState({
        persons: [
            { name: 'raju', age: 28 },
            { name: 'saju', age: 49}
        ]
    })

  const [otherPropertyState, setOtherPropertyState] = useState({ otherProperty: 'this is another property'})
    console.log(otherPropertyState)

    // this replaces old state not merge it
    const mixName = () => {
      setPersonState( {
            persons: [
                { name: 'ramesh', age: 28 },
                { name: 'suresh', age: 49}
            ]
          })
        
          // setOtherPropertyState({
          //   otherProperty: 'hello shrujan '
          // }) 
          

    }

    
   

    
    // adding other property to state as its replaced
    

    return  (
      <div className="App">
          <h1 >Hello Shrujan Shetty</h1>
          <Per name="manu" age='24' />
          <Person name="shrujan" age='30'> Hobby - Movies </Person>
          <Person whenClicked = { mixName } name = { personState.persons[0].name } age = { personState.persons[0].age }> Hobby - reading </Person>
          <Person name = { personState.persons[1].name } age = { personState.persons[1].age }> Hobby - swimming </Person>
          <div>{ otherPropertyState.otherProperty }</div>
          <button onClick={ mixName }>Mix Names</button>
          {/* <Fruit></Fruit> */}
      </div>
    )
  
    
    
  
  // return (
  //   React.createElement('div', { className: 'App' }, React.createElement('h1', { className: "myClass" }, 'Hello Shrujan Shetty!!!'))
  // )
}

export default App;
