
export const getStateCount = (state) => {
    return state.countReducer.count
}

export const getPeopleList = (state) => {
    return state.peopleReducer.people;
}