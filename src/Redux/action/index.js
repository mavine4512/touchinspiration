// import {DELETE_ITEM, SAVE_USER} from "../reducer";


export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_DATA = 'SAVE_DATA';

export function upDateItem(data) {
    return {
        type: 'SAVE_DATA',
        payload: data,
    };
}

export function deleteItem(item) {
    return {
        type: 'DELETE_ITEM',
        payload: item,
    };
}


