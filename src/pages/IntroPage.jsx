import React from "react";
import Loadable from "react-loadable";


const loader = () => <div>Loading...</div>;

const HomeLazy = Loadable({
    loader: () => import("../containers/Home/index"), 
    loading: loader,
    timeout:10000,
    delay:0.3,
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