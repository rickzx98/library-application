/* eslint-disable import/default */
const NODE_ENV = process.env.NODE_ENV;
import './index.scss';
import './images/body-bg.jpg';
import './images/settings-header.jpg';
import './images/books-header.jpg';
import './images/library-header.jpg';
import './images/subject-header.jpg';
import './images/app-icon.png';
import './favicon.ico';
import './images/upload-image.png';
import configureStore, {history} from './store/configureStore';

import {AppContainer} from 'react-hot-loader';
import React from 'react';
import Root from './components/System/RootPage/Root';
import {SecurityActions} from './components/System/Security/';
import {render} from 'react-dom';
import FluidFunc from 'fluid-func';

switch (NODE_ENV) {
  case 'development':
  case 'DEVELOPMENT':
    FluidFunc.config({
      logMonitor: (monitor) => {
      //  console.log('monitor', monitor);
      }
    });
    break;
}
const store = configureStore();
store.dispatch(SecurityActions.loadCurrentUser()); // load authenticated user
render(
  <AppContainer>
    <Root store={store} history={history}/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/System/RootPage/Root', () => {
    const NewRoot = require('./components/System/RootPage/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history}/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
