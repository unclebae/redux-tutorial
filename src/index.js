import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducer from "./reducer/index";
import App from "./components/App";

const store = createStore(allReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
