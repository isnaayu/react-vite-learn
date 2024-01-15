import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./components/redux/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
