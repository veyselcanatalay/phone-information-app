import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import List from './components/List';
import Graphic from './components/Graphic';
import store from "./store"



ReactDOM.render(
  <Provider store={store}>
    <App />
    <List/>
    <Graphic/>
    </Provider>
    ,
  document.getElementById('root')
);
