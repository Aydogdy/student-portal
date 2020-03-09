import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import studentReducer from './reducers/studentReducer';

let initialState = {
    students: [
        { id: 1, firstName: 'Иван', lastName: 'Иванов', dofb: '04/11/1995', grade: 1 },
        { id: 2, firstName: 'Мария', lastName: 'Голубкина', dofb: '12/03/1995', grade: 3 },
        { id: 3, firstName: 'Андрей', lastName: 'Белов', dofb: '01/12/1991', grade: 2 },
    ] 
}

if( localStorage.getItem("initialState") === null)
    localStorage.setItem('initialState', JSON.stringify(initialState));
else 
    initialState = JSON.parse(localStorage.getItem('initialState'));

const store = createStore(
    studentReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root')
);

serviceWorker.unregister();
