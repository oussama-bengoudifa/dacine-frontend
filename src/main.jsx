import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

//mantine
import { MantineProvider } from "@mantine/core";

//i18n
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colors: {
          vittlo: [
            "#B3DAEF",
            "#A6D4EC",
            "#99CEEA",
            "#8CC8E7",
            "#2f2e41",
            "#2f2e41",
            "#2f2e41",
          ],
        },
        primaryColor: "vittlo",
      }}
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
