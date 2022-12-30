//import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./styles/home.scss";
import MenuManager from "./components/Menu/MenuManager";
import { Routes, Route } from "react-router-dom";
import ToolKit from "./containers/ToolKit";
import CustomCursor from "./components/CustomCursor";
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./pages/ContactPage";
import Intro from "./pages/IntroPage";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <CustomCursor />
      <ToastContainer/>
      <MenuManager>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/toolkit" element={<ToolKit />} />
          <Route path="/collab" element={<Contact />} />
        </Routes>
      </MenuManager>
    </>
  );
}

export default App;
