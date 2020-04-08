import React, { Component } from 'react';
import Fruit from '../../components/Fruit/Fruit';
import FruitForm from '../../components/Fruit/FruitInput';
import Aux from '../../hoc/SimpleHOC'

class FruitList extends Component  {
        // this is a state based crud operation

        constructor(props) {
            console.log('[FruitList] Constructor')
            super(props);
            this.state = {
                fruit: [], // main backed up list
                fruitName: '',
                filteredFruits: [] // list shown to user
            }

            this.onSubmit = this.onSubmit.bind(this);
            this.handleFruitChange = this.handleFruitChange.bind(this);
        }

    deleteFruit (fruitName) {

        let fruitsList = [ ...this.state.fruit ];
        let filteredList = [ ...this.state.filteredFruits ];

        let index = fruitsList.findIndex((fruit) => {
            return fruit === fruitName
        })

        if (index !== -1) {
            fruitsList.splice(index, 1)
        }

        let filteredIndex = filteredList.findIndex((fruit) => {
            return fruit === fruitName
        })

        if (index !== -1) {
            filteredList.splice(filteredIndex, 1)
        }

        this.setState({
            ...this.state,
            fruit: fruitsList,
            filteredFruits: filteredList
        }) 
    }

    onSubmit (event) {
        const fruitList = [ ...this.state.fruit ];
        fruitList.push(this.state.fruitName)

        // update the backup and filtered fruit list with same data when submitted
        this.setState({
            fruit: fruitList,
            fruitName: '',
            filteredFruits: fruitList
        })

        event.preventDefault();
    }

    handleFruitChange (event) {
        // code to filter out the fruits from the list
        // take the main back of fruit
        let list = [...this.state.fruit ];
        let filteredFruitList = list.filter(fruit => fruit.includes(event.target.value)).map(filteredFruit => {
            return filteredFruit
        })

        console.log('Filter == ', filteredFruitList);

        // ---------------------------

        this.setState( {
            ...this.state,
            filteredFruits: filteredFruitList,
            fruitName: event.target.value
        })
    }
    
    render() {
        return (
            <Aux>
                <FruitForm
                    whenSaved= { this.onSubmit }
                    whenChanged={ this.handleFruitChange }
                    value={ this.state.fruitName }
                ></FruitForm>

                <Fruit 
                    list = {this.state.filteredFruits}
                    whenClicked = { this.deleteFruit.bind(this) }
                >
                </Fruit>
            </Aux>    
        );
    }
    


}

export default FruitList;