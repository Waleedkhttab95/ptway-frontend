import { createStore, applyMiddleware } from 'redux';
import { createPromise } from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { loadState } from '../_core/localStorage';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      createPromise({
        promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
      })
    )
  )
);

export default store;
