import {combineReducers} from "redux";

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SAVE_DATA = 'SAVE_DATA';

//Action

export function upDateItem(data) {
    return {
        type: 'SAVE_DATA',
        payload: data,
    };
}


export function deleteItem(item) {
    return {
        type: DELETE_ITEM,
        payload: item,
    };
}


//Reducers
const initialState = {
    data: [],
};

function itemsReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_ITEM:
            const i = state.data.filter((it) => it == action.payload);

            if (i.length > 0) {
                //ignore
                console.log('filter', i);
                return state;
            }
            state.data.push(action.payload);
            console.log('state is', state);
            return state;
            // Endpoint: "https://ti-react-test.herokuapp.com/users/{id}"
        case DELETE_ITEM:
            const deleteNewArray = state.items.filter(
                (i) => i.imdbID != action.payload.imdbID,1
            );
            return {...state, items: deleteNewArray};
        default:
            return state;

            case SAVE_DATA:
            state.data.push(action.payload);
            return state;
    }

}

export default combineReducers({dataState: itemsReducer});
