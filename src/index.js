// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import { render } from "react-snapshot";
// import ReactDOM from 'react-dom';
// import "./index.css";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";

render(
  <App />, 
  document.getElementById("root"));

// Old version
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
