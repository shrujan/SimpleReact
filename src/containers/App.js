import React, { Component } from 'react'; // impokrt react omponent
import { Route } from 'react-router-dom'; 
import axios from 'axios'; // import obj
import { connect } from 'react-redux';

import logo from '../logo.svg';
import './App.css';
import Per from '../components/Persons/Person/Person'; // first char should be capital -- works
import Person from '../components/Persons/Person/Person'; // first char should be capital
import Fruit from '../components/Fruit/Fruit'
// import person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import Routing from '../components/Routing/Routing';


import  { getPeopleList } from '../store/selector';
import * as actionType from '../store/actions';

import person from '../components/Persons/Person/Person';

class App extends Component {

  constructor (props) {

    super(props);
    console.log('**[App.js] Constructor');
    this.state = {
      persons: [
          { id:'1', name: 'raju', age: 28 },
          { id:'2',name: 'saju', age: 49}
      ],
      showPersons: false
    }
  }

  static getDerivedStateFromProps (props, state) {

    console.log('**[App.js] Get Derived State From Props', props);
    return state
  }

  componentDidMount() {
    console.log('**[App.js] Component did mount ...', JSON.stringify(this.state.persons));
    
        this.props.fetchPeople()
  }


  // not called anymore
  mixName = (name) => {
  // works with ES6 arrow function only

    this.setState( {
      persons: [
          { name: name, age: 28 },
          { name: 'suresh', age: 49}
      ]
    } )
  }

  //old update code - updates all namess
  updateName = (event) => {
    this.setState( {
      persons: [
          { name: event.target.value, age: 28 },
          { name: event.target.value, age: 49}
      ]
    } )

    
  } 

  // update based on users choice as to which element user wants to change
  updateUsersChoice = (event, id) => {
    // old code for local state
      // const persons = [...this.state.persons]; // local state

      // let index = persons.findIndex((p)=> {
      //   return p.id === id
      // })

      // console.log(index);

      // persons[index].name = event.target.value;

      // this.setState({ persons: persons }) // local state
      // ---------------------------


      this.props.updatePeople(event.target.value, id)

  }


  togglePerson = () => {
      const flag = this.state.showPersons;

      this.setState({ showPersons : !flag })
  }

  deletePerson = (id) => {
      // const persons = [...this.state.persons]; // best way
      // persons.splice(index, 1);
      // this.setState({ persons: persons})

      // trigger handler
      this.props.deletePeople(id);
      
  }


  render() {
    console.log('**[App.js] Render method')
    let personBlock = null;

    if (this.state.showPersons === true) {
        personBlock = (
        <div >
          
          {
            
              // <Persons 
              //         personsList = { this.state.people }
              //         whenChanged = { this.updateUsersChoice }
              //         whenClicked = { this.deletePerson }
              //         />

              

              // using redux saga and central store
              <Persons 
                      personsList = { this.props.ppl }
                      whenChanged = { this.updateUsersChoice }
                      whenClicked = { this.deletePerson }
                      />

          }

      </div>
      )
    }

    

    return  (
            <div className="App">
                   <div className="people-mgmt">
                    <Cockpit 
                      toggleBtn = { this.togglePerson }
                      title = { this.props.title }
                      peopleList = { personBlock }
                      ></Cockpit>
                      
                  </div>
                  

                  <hr></hr>
                  <Routing></Routing>
                 
            </div>
          
          
      
    )
  }
    
}

const mapStateToProps = (state) => {
    return {
        ppl: getPeopleList(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeople: () => dispatch({ type: actionType.FETCH_PPL }),
        updatePeople: (nameVal, id) => dispatch({ type: actionType.UPDATE_PPL , value: { name: nameVal, id: id}}),
        deletePeople: ( id ) => { dispatch({ type: actionType.DELETE_PPL , value: id } ) }
    } 
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
