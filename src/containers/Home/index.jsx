import React from "react";
import ContactButton from "../../components/ContactButton";
//import Loader from "../../components/Loader/Loader";
//import Projects from "../Projects/Projects";
import MeMyselfandI from "../../components/MeMyselfandI/MeMyselfandI";
import Skills from "../../components/Skills/Skills";
//import ScrollComp from "../ScrollComp/ScrollComp";
import SkillsIntro from "../../components/SkillsIntro/SkillsIntro";

//import useLocoScroll from "../../hooks/useLocoScroll";

const Intro = () => {
  //const ref = useRef(null);
  /*const [preloader, setPreloader] = useState(true);

  //  useLocoScroll(!preloader);

  const [timer, setTimer] = useState(3);

  const clear = () => {
    setPreloader(false);
  };

  useEffect(() => {
    window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, [preloader]);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);*/

  return (
    <>
      <div className="main-container" id="main-container" data-scroll-container>
        <h1>
          Hello <br /> I am A<span>a</span>RYAN
        </h1>
  <SkillsIntro />
  

        <ContactButton />
      </div>
      <MeMyselfandI />
      <Skills />
    </>
  );
};

export default Intro;
