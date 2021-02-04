import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import rootReducer from "./reducers";
import reportWebVitals from './reportWebVitals';


//above the create store is taking in two arguments
//a reducer
// and a enhancer: it is used to specify it to enhance the store
// with third party capabilities such as middleware, time travel, 
//persistence, etc.
// The only store enhancer that ships with redux is applyMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

  render(
  <React.StrictMode>

    <Provider store = {store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
