import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import studentReducer from './reducers/student-reducers';

let initialState = {
    students: [
        { id: 1, firstName: 'Сергей', lastName: 'Иванов', dofb: '11/20/1995', grade: 2 },
        { id: 2, firstName: 'Александр', lastName: 'Петров', dofb: '05/17/1993', grade: 3 },
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
