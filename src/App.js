import "./App.css";
import Content from "./containers/Contents/Content";
import GlobalStyle from "./assets/styles/Global.styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
