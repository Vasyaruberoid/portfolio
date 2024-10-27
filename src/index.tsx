import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import MyTheme from "./styled/MyTheme";
import GlobalStyles from "./styled/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={MyTheme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>
);
