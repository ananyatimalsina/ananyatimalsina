import React from "react";
import ReactDOM from "react-dom/client";
import i18next from "i18next";

import global_en from "./lang/en/global.json";
import global_de from "./lang/de/global.json";
import global_nep from "./lang/nep/global.json";

import App from "./App.tsx";
import "./main.css";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { global: global_en },
    de: { global: global_de },
    nep: { global: global_nep },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
