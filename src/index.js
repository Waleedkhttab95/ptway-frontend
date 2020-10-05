import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/createStore';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
// import { saveState } from './_core/localStorage';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

const resources = {
  en: require('./en.json'),
  ar: require('./ar.json')
};

const trackingId = 'UA-142610001-1'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

const tagManagerArgs = {
  gtmId: 'GTM-MPBS7PG'
};

TagManager.initialize(tagManagerArgs);
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    }
  })
  .then(() => {
    // store.subscribe(() => {
    //   saveState({
    //     user: store.getState().user
    //   });
    // });
    // if (document.getElementById('root').hasChildNodes()) {
      // ReactDOM.hydrate(
      //   <I18nextProvider i18n={i18n}>
      //     <Provider store={store}>
      //       <App />
      //     </Provider>
      //   </I18nextProvider>,
      //   document.getElementById('root')
      // );
    // } else {
      ReactDOM.render(
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <App />
          </Provider>
        </I18nextProvider>,
        document.getElementById('root')
      );
    // }

    serviceWorker.unregister();
  });
