import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountOperation from '../../components/Count-operations/CountOperations';
import CountOutput from '../../components/Counter-Output/CounterOutput'
import './counter.css';
import * as actionType from '../../store/actions';
import * as selectors from '../../store/selector';

class Counter extends Component {
    
    constructor () {
        super();
        this.state = {
            count: 0
        }
    }

    // no longer needed as coderefers to redux 
    countManipulations (action) {
        console.log(action)
        switch(action) {
            case 'Add1':
                // setstate callback gets previous state and props as args (previousState, props) =>
                this.setState((previousState) => { return { count: previousState.count + 1 } })
                return
            case 'Sub1':
                this.setState((previousState) => { return { count: previousState.count - 1 }})
                return
            case 'Add5':
                this.setState((previousState) => { return { count: previousState.count + 5 }})
                return 
            case 'Sub5':
                this.setState((previousState) => { return { count: previousState.count - 5 } } )
        }

    }

    render() {
        return (
            <div className="counterOperations">
                {/* <div className = "operation-container">
                        <CountOperation 
                            whenClicked={ () => { this.countManipulations('Add1') } }
                            operationName="Add 1"></CountOperation>

                        <CountOperation 
                            whenClicked={ () => { this.countManipulations('Sub1') } }
                            operationName="Subtract 1"></CountOperation>

                        <CountOperation 
                            whenClicked={ () => { this.countManipulations('Add5') } }
                            operationName="Add 5"></CountOperation>

                        <CountOperation 
                            whenClicked={ () => { this.countManipulations('Sub5') } }
                            operationName="Subtract 5"></CountOperation>
                </div>
                 */}

                    <CountOutput totalCount={ this.props.ctr }></CountOutput>

                    <div className = "operation-container">
                        <CountOperation 
                            whenClicked={ this.props.onIncrementOne  }
                            operationName="Add 1"></CountOperation>

                        <CountOperation 
                            whenClicked={ this.props.onDecrementOne }
                            operationName="Subtract 1"></CountOperation>

                        <CountOperation 
                            whenClicked={ this.props.onIncrementFive  }
                            operationName="Add 5"></CountOperation>

                        <CountOperation 
                            whenClicked={ this.props.onDecrementFive }
                            operationName="Subtract 5"></CountOperation>
                </div>
               
            </div>
        )
    }
}

// state passed is global redux state
const mapStateToProps = (state) => {
    // extract only the required data from global state in this case counter only
    console.log('count ttt ', state)
    return {
        // ctr: state.count // selector functions
        ctr: selectors.getStateCount(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    // onIncrement1 action
    return {
        onIncrementOne: () =>  dispatch({ type: actionType.Add1}),
        onDecrementOne: () =>  dispatch({ type: actionType.Sub1}) ,
        onIncrementFive: () =>  dispatch({ type: actionType.Add5, value: 5}) ,
        onDecrementFive: () =>  dispatch({ type: actionType.Sub5, value: 5}) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)