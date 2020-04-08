import { takeEvery, put, call } from 'redux-saga/effects';

import { fetchPeople } from '../api/api';
import * as actions from '../store/actions';

// generator methods function* able to pause in middle when yeild is encounted
export function* peopleSaga () {
    // listen to every request trigger and dispach action. takeLatest - take latest request
    yield takeEvery(actions.FETCH_PPL, fetchAllPeople);
    console.log('after call in saga');
}


// worker saga
function* fetchAllPeople() {
     // fetch people  from API
  
    try {
        // call - this instructs the saga middleware to call a function
        let peopleList = yield call(fetchPeople);
        // put - instructs saga middleware to dispatch action to store .. caught by redux
        yield put({type: actions.FETCHED_PEOPLE, value: peopleList})
    } catch (e) {
        console.log('ERROR')
    }
    
}
