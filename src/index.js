import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import  {createStore,applyMiddleware} from 'redux';
 import thunk from 'redux-thunk';
import rootReducer from './reducer/index';

// middleware use logger(obj) obj have dispatch and getState its different from store dispatch and getstate
// using currying concept logger(dispatch,getState)(next)(action)

// const logger=function(dispatch,getState){
//   return function (next){
//     return function (action){
//       console.log("ACTION_TYPE",action.type);
//       next(action);
//     }

//   }
  

// }

// this is the other way to write middleware code
const logger=(dispatch,getState)=>(next)=>(action)=>{
 // console.log("ACTION_TYPE",action.type);
  next(action);
}

//  now in just below it is a thunk function which is used to return a function
// thunk jab use krte hai hum jb humein action likhna as a function and also  return as a function 
// action usually return a object like {type:ADD_MOVIES,movie}

// const thunk=(dispatch,getState)=>(next)=>(action)=>{
//   if(typeof action ==='function'){
//     action(dispatch)
//     return;
//   }
//    next(action);
//  }

//  it is  a code of thunk function but react bydefault give us thunk .. in cmd write npm i redux-thunk
// so above code  of thunk is commented bcz we r using thunk of redux 
 


const store = createStore(rootReducer,applyMiddleware(logger,thunk));
// console.log('store ',store);
//  console.log('Before  state ',store.getState());
//  store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
//  })
 console.log('after state',store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

