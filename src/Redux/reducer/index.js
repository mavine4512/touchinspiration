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

export function itemObject(item){
    return{
        type:'ITEM_OBJECT',
        payload:item,
    }
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
    itemObject:'',
};

function itemsReducer(state = initialState, action) {

    switch (action.type) {
        case DELETE_ITEM:
            const deleteNewArray = state.items.filter(
                (i) => i.imdbID != action.payload.imdbID,
            );
            return {...state, items: deleteNewArray};

        case 'ITEM_OBJECT':
            return {
                ...state,itemObject: action.payload
            }

        case 'SAVE_DATA':
            state.data.push(action.payload);
            return state;

        default:
            return state;
    }
}

export default combineReducers({dataState: itemsReducer});
