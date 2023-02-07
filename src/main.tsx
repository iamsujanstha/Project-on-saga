import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App";
import store from "./setup/redux/store";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import "./App.scss";

i18next
  .use(HttpApi)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "np", "fr"],
    debug: false,
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage"],
      caches: ["cookie"],
    },

    backend: {
      loadPath: "/src/assets/i18n/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
