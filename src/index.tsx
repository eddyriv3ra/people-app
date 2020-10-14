import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'app/App.style';
import App from 'app';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
