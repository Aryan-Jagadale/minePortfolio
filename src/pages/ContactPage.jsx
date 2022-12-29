import React from "react";
import Loadable from "react-loadable";


const loader = () => <div>Loading...</div>;

const ContactLazy = Loadable({
    loader: () => import("../containers/Contact/Contact"), 
    loading: loader,
    timeout:10000,
    delay:0.3,
    error:"Something went wrong!"
  });
  
  const Index = () => {
    return (
      <>
        <ContactLazy />
      </>
    );
  };
  export default Index;