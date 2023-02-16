import React from "react";
import Loadable from "react-loadable";
import Loader from "../components/Loader/Loader";


const loader = () => <Loader/>;

const AboutLazy = Loadable({
    loader: () => import("../containers/About/About"), 
    loading: loader,
    timeout:10000,
    delay:0.3,
    error:"Something went wrong!"
  });
  
  const Index = () => {
    return (
      <>
        <AboutLazy />
      </>
    );
  };
  export default Index;