import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/route/App';
import reducer from 'src/reducer';

import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { get as lGet } from 'lodash';
import reportWebVitals from 'src/reportWebVitals';

const root = document.getElementById("root")
let renderMethod;
let store;
if (root && root.innerHTML !== "") {
  renderMethod = ReactDOM.hydrate
  // const hydrateStore = createStore(reducer, lGet(window, '__PRELOADED_STATE__'))
  const hydrateStore = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
  store = hydrateStore;
} else {
  renderMethod = ReactDOM.render
  const renderStore = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
  store = renderStore;
}



let html = (
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
        <App></App>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
)


renderMethod(
    html,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
