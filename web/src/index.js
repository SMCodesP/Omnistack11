<<<<<<< HEAD
import React from "react";
import { render } from "react-dom";
import App from "./App.js";

render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"));
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> d26c757cc30ea0cf19d376e5b227eba5026cb898
