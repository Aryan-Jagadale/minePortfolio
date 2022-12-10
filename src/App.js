//import logo from './logo.svg';
import Header from "./components/Header";
import "./styles/home.scss";
import MenuManager from "./components/Menu/MenuManager";
import Intro from "./components/Intro/Intro";
import { Routes, Route } from "react-router-dom";
import ToolKit from "./containers/ToolKit";

function App() {
  return (
    <>
      <MenuManager>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/toolkit" element={<ToolKit />} />
        </Routes>
      </MenuManager>
    </>
  );
}

export default App;
