import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App";
import store from "./setup/redux/store";
import "./App.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <Provider store={store}>
            <App />
        </Provider>
);
