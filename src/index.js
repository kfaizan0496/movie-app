import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import  {createStore}  from 'redux';
import movies from './reducer/index';


const store = createStore(movies);
console.log('store ',store);
 console.log('Before  state ',store.getState());
 store.dispatch({
  type:'ADD_MOVIES',
  movies:[{name:'superman'}]
 })
 console.log('after state',store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

