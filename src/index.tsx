import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/route/App';
import { BrowserRouter } from "react-router-dom";


let html = (
  <React.StrictMode>
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
  </React.StrictMode>
)
const root = document.getElementById("root")
let renderMethod;
if (root && root.innerHTML !== "") {
  renderMethod = ReactDOM.hydrate
} else {
  renderMethod = ReactDOM.render
}

renderMethod(
    html,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
