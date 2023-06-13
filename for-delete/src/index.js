import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import CustomStore from "./Store/CustomStore.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={CustomStore}>
    <MainRouter />
  </Provider>
);
