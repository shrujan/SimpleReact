// import Redux from 'redux'; // react syntax es6

// node syntax
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    count: 0
}

// reducers
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD1') {
        return {
            ...state,
            count: state.count + 1
        }
        // state.count ++
    } 

    if (action.type === 'ADD10') {
        return {
            ...state,
            count: state.count += action.value
        }
    } 
    return state
}

// store 
const store = createStore(rootReducer);

//subscription before dispatch dispatch needs to be subscribed in onder to work
store.subscribe(() => {
    // triggered per dispatch and state is updated
    console.log('[subscribe]', store.getState());
})

// dispatching Action 
store.dispatch({ type: "ADD1" });
store.dispatch({ type: "ADD10" , value: 10});

console.log("final = ", store.getState())


//subscription
