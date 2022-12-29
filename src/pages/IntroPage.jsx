import React from "react";
import Loadable from "react-loadable";
import Loader from "../components/Loader/Loader";


const loader = () => <Loader/>;

const HomeLazy = Loadable({
    loader: () => import("../containers/Home/index"), 
    loading: loader,
    timeout:10000,
    delay:1,
    error:"Something went wrong!"
  });
  
  const Index = () => {
    return (
      <>
        <HomeLazy />
      </>
    );
  };
  export default Index;