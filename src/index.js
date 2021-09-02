import React from "react";
import ReactDom from "react-dom";
import Appredux from "./components/App-redux";

import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = ['react', 'redux'];
const store = createStore(changeStore);

function changeStore(state = initialState, action) {
    switch (action.type) {
        case 'WRITE':
            return [
                ...state,
                action.payload
            ]
        break;
        default:
            return state
    }
};
//store.subscribe(()=> {
//    const items = document.querySelector(".testUl")
//    items.innerHTML = ''
//    document.querySelector(".testInput").value = ''
//    store.getState().map(item => {
//        const li = document.createElement("li");
//        li.textContent = item;
//        items.appendChild(li);
//
//    })
//})
//
//const testButton = document.querySelector(".testButton")
//testButton.addEventListener('click', ()=>{
//    const inputValue = document.querySelector(".testInput").value
//    store.dispatch({type: 'WRITE', payload: inputValue})
//})

ReactDom.render(
    <Provider store={store}>
        <Appredux/>
    </Provider>,
    document.getElementById("root"));