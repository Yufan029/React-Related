import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// tow package we need to install
// 1. redux - used for create 'store'
// 2. react-redux - is the library which help us to connect our rudex store to our react application.
//                - connect component to center store of data and interact with it.


// Add createStore from 'react-redux' and create the 'store'
// create reducers folder and rootReducer.js file and rootReducer function and pass it into createStore() as parameter.
// Add { Provider } from 'react-redux' and wrap the <App /> root tag and pass the store as parameter of <Provider store={store}> tag.

// In the component which use the store data. Refer the steps in the Home.js component.
