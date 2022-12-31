//import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./styles/home.scss";
import MenuManager from "./components/Menu/MenuManager";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Contact from "./pages/ContactPage";
import Intro from "./pages/IntroPage";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <CustomCursor />
      <ToastContainer/>
      <MenuManager>
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/collab" element={<Contact />} />
        </Routes>
      </MenuManager>
    </>
  );
}

export default App;
