import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CanvasDraw from "react-canvas-draw";
import Dashboard from "./Dashboard.js"
import MyCanvas from "./myCanvas.js";

ReactDOM.render(<MyCanvas />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
