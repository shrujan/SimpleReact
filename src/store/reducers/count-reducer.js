import * as actionTypes from '../actions';

const initialState = {
    count: 0
}

const countReducer = (state = initialState, action) => {
    // reducer function for to access store 
    if (action.type === actionTypes.Add1) {
        return {
            ...state,
            count: state.count + 1
        }
    }

    if (action.type === actionTypes.Sub1) {
        return {
            ...state,
            count: state.count - 1
        }
    }

    if (action.type === actionTypes.Add5) {
        return {
            ...state,
            count: state.count + action.value
        }
    }

    if (action.type === actionTypes.Sub5) {
        return {
            ...state,
            count: state.count - action.value
        }
    }

    
    return state
}

export default countReducer;