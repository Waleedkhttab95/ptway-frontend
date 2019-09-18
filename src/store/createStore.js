import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers = compose;
const promiseTypeSuffixes = ["LOADING", "SUCCESS", "ERROR"];

const middleWare = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware({ promiseTypeSuffixes })
);

// const persistedState = loadState();
const store = createStore(reducers, composeEnhancers(middleWare));

export default store;
