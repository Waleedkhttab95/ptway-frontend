import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/createStore';
import * as serviceWorker from './serviceWorker';
import { saveState } from './_core/localStorage';

store.subscribe(() => {
  saveState({
    user: store.getState().user
  });
});
ReactDOM.render(<App store={store} />, document.getElementById('root'));

serviceWorker.unregister();
