import React, { Fragment } from 'react';
import { render } from 'react-dom';
// import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
// import Root from './containers/Root';
// import { configureStore, history } from './store/configureStore';
import './app.global.css';
import App from './components/Test'
// const store = configureStore();

// const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;
console.log('check')
render(
  <App />,
  document.getElementById('root')
);


// <Root store={store} history={history} />
