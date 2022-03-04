import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/route/App';
import reportWebVitals from 'src/reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LikePage from 'src/route/LikePage';
import UserPage from 'src/route/UserPage';

let html = (<React.StrictMode>
<BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="likes" element={<LikePage />} />
      <Route path="users" element={<UserPage />} />
  </Routes>
</BrowserRouter>,
</React.StrictMode>)


if (process.env.IS_SSR){
  ReactDOM.hydrate(
    html,
    document.getElementById('app')
  );
} else {
  ReactDOM.render(
    html,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
