import React from 'react';
import { Provider, connect } from "react-redux";
import Home from './Universities';
import './App.scss';

const App =(props)=> {
  return (
    
    <Provider store ={props.store} >
    <div className="App">
      <Home />
    </div>
   </Provider>
  );
}

export default App;
