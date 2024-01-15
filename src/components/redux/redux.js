/*
Redux
Store -> Wadah yang berguna untuk menyimpan data/value/state secara global
Reducer -> Untuk melakukan update Store
Dipacting Action -> Proses untuk memanggil state atau bagaimana data dikirimkan
Subscription ->  Method yang digunakan ketika kita memanggil Store/Data yang diperlukan
*/

import { createStore } from "redux"
// const redux = require('redux')
// const createStore = redux.createStore

const initialState = {
    name: "Isna",
    age: 22
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_AGE":
            return {
                ...state,
                age: state.age + 1
            }

        case "CHANGE_NAME":
            return{
                ...state,
                name: action.newName
            }
        default:
            return state
    }
}

const store = createStore(rootReducer)
console.log(store.getState())

store.subscribe(()=> {
    console.log("Store Change", store.getState())
})

store.dispatch({
    type: "ADD_AGE"
})

store.dispatch({
    type: "CHANGE_NAME",
    newName: "Udin"
})

console.log(store.getState())