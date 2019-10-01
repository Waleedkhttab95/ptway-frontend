import React from 'react';
import { Provider, connect } from "react-redux";
import AdminLogin from './Login';


const App =(props)=> {
  return (
    
    <Provider store ={props.store} >
    <div className="App">
      <AdminLogin />
    </div>
   </Provider>
  );
}

export default App;
