import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {rootReducer} from "./redux/rootReducers";

const store = createStore(rootReducer)

//Компонент Provider - компонент высшего порядка
//Не создает шаблон, а добавляет функциональность к компоненту App
//В данно случае сы связали React с redux
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
