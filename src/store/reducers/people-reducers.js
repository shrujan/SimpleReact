import * as actionsList from '../actions'

const peopleState = {
    people: []
}

const peopleReducer = (state = peopleState, action) => {
    if (action.type === actionsList.FETCHED_PEOPLE) {
        return {
            ...state,
            people: action.value
        }
    }
     
    if (action.type === actionsList.UPDATE_PPL) {
        const peopleList = [ ...state.people ];
        const pplId = action.value.id;
        const pplName = action.value.name;

        console.log(peopleList);

      let index = peopleList.findIndex((p)=> {
        return p.id === pplId
      })

      peopleList[index].name = pplName;

        return {
            ...state,
            people: peopleList
        }
    }

    if (action.type === actionsList.DELETE_PPL) {
        const id = action.value;
        const pplList = [ ...state.people ];

        let index = pplList.findIndex((ppl) => {
            return ppl.id === id
        })

        if (index !== -1) {
            pplList.splice(index, 1);
        }

        return {
            ...state,
            people: pplList
        }
    }

    return state
}

export default peopleReducer