import React from "react";
import ReactDOM from "react-dom/client";
import { UIProvider, UIStyle, extendTheme } from "@yamada-ui/react";
import App from "./App";

const globalStyle: UIStyle = {
  body: {
    bg: "#475f94",
    color: "black",
  },
};

const customTheme = extendTheme({ styles: { globalStyle } })();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UIProvider theme={customTheme}>
      <App />
    </UIProvider>
  </React.StrictMode>
);
