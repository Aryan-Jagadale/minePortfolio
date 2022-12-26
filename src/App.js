//import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./styles/home.scss";
import MenuManager from "./components/Menu/MenuManager";
import Intro from "./components/Intro/Intro";
import { Routes, Route } from "react-router-dom";
import ToolKit from "./containers/ToolKit";
import CustomCursor from "./components/CustomCursor";

function App() {
  //const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  

  return (
    <>
    <CustomCursor/>
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
