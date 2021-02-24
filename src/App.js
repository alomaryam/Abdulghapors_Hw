import "./App.css";
import Home from "./components/Home.js";
import Abdulghapor from "./components/Abdulghapor.js";
import Salwa from "./components/Salwa.js";
import { Switch, Route } from "react-router";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
background-color: ${(props) => props.theme.backgroundColor};
color: ${(props) => props.theme.color};
}
`;

const theme = {
  backgroundColor: "#E1F2F9",
  color: "#080E33",
  differentColor: "#32C326",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Abdulghapor">
          <Abdulghapor />
        </Route>
        <Route path="/Salwa">
          <Salwa />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
