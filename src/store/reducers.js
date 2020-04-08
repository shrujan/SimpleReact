// import * as actionTypes from './actions';

// -------------------------------
// we can combine reducers using combine reducers
import countReducer from './reducers/count-reducer';
import peopleReducer from './reducers/people-reducers';

import { combineReducers } from 'redux';

const reducer = combineReducers({ 
    countReducer: countReducer,
    peopleReducer: peopleReducer
}) 
// import this combinded reducers and pass it to createStore() in index.js file
// -------------------

// const initialState = {
//     count: 0
// }

// const reducer = (state = initialState, action) => {
//     // reducer function for to access store 
//     if (action.type === actionTypes.Add1) {
//         return {
//             ...state,
//             count: state.count + 1
//         }
//     }

//     if (action.type === actionTypes.Sub1) {
//         return {
//             ...state,
//             count: state.count - 1
//         }
//     }

//     if (action.type === actionTypes.Add5) {
//         return {
//             ...state,
//             count: state.count + action.value
//         }
//     }

//     if (action.type === actionTypes.Sub5) {
//         return {
//             ...state,
//             count: state.count - action.value
//         }
//     }

    
//     return state
// }



export default reducer