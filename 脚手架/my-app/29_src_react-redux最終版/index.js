import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 此處需要使用Provider包裹App組件，目的是為了讓App組件所有的後代容器組件都能接收到store
  <Provider store={store}>
    <App/>
  </Provider>
);