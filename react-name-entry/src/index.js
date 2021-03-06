import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import dataReducer from "./Redux";
import {Provider} from 'react-redux';

let store = createStore(dataReducer);

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>, 
document.getElementById('root'));
