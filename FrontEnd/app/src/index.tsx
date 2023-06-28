import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "./theme/colors";

const theme = extendTheme({
  colors
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
