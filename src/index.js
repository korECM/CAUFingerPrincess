import React from "react";
import ReactDOM from "react-dom";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
import App from "./App";
// import App2 from "./App2";
import * as serviceWorker from "./serviceWorker";
// import rootReducer, { rootSaga } from "./modules";
// import { createLogger } from "redux-logger";
// import createSagaMiddleware from "redux-saga";
// import { composeWithDevTools } from "redux-devtools-extension";

import WebfontLoader from "@dr-kobros/react-webfont-loader";
// import "semantic-ui-css/semantic.min.css";

// webfontloader configuration object. *REQUIRED*.
const config = {
  google: {
    families: ["Noto Sans KR:500,700"]
  }
};

// Callback receives the status of the general webfont loading process. *OPTIONAL*
const callback = status => {
  // I could hook the webfont status to for example Redux here.
};

ReactDOM.render(
  <WebfontLoader config={config} onStatus={callback}>
    <App />
  </WebfontLoader>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
