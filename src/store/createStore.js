import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import { loadState } from "../_core/localStorage";
import reducers from "./reducers";
import {composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const promiseTypeSuffixes = ["LOADING", "SUCCESS", "ERROR"];

const persistedState = loadState();
const store = createStore(reducers,persistedState,composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  promiseMiddleware
  
)));
// const store=createStore(reducers,{}, middleWare());
export default store;
