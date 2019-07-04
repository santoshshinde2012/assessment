import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import { unregister } from "./registerServiceWorker";
import { configureStore } from "./store";

// Unregister the service worker from create-react-app
unregister();

const store = configureStore();

// Always called on resolve of handler.
const defaultRender = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

defaultRender();
