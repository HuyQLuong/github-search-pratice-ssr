import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/route/App';
import reducer from 'src/reducer';

import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import reportWebVitals from 'src/reportWebVitals';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


const persistConfig = {
  key: 'root',
  storage,
}


const persistRootReducer = persistReducer(persistConfig, reducer);

const root = document.getElementById("root")
let renderMethod;
let store;
if (root && root.innerHTML !== "") {
  renderMethod = ReactDOM.hydrate
  const hydrateStore = createStore(persistRootReducer, composeWithDevTools(applyMiddleware(thunk)));
  store = hydrateStore;
} else {
  renderMethod = ReactDOM.render
  const renderStore = createStore(persistRootReducer, composeWithDevTools(applyMiddleware(thunk)));
  store = renderStore;
}

export const reduxPersistor = persistStore(store);


let html = (
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={reduxPersistor}>
          <BrowserRouter>
            <App></App>
          </BrowserRouter>
        </PersistGate>
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
