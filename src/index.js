import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { rootRducer } from './redux/rootReduser';
import { Provider } from 'react-redux';


const store = createStore(rootRducer)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
