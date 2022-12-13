import React,{useContext} from "react";
import { Instagram  } from "react-feather";
import "./style.scss";
import { MenuContext } from "../MenuManager";
import cn from "classnames";
//import Reddit from "../../../images/reddit.png"
import { Link } from "react-router-dom";


const internalLinks = [
  {
    url: "/",
    component: <span>Home</span>,
    img: "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80",
  },
  {
    url: "/toolkit",
    component: <span>Toolkit Web</span>,
    img: "https://images.unsplash.com/photo-1615713170963-2595d2c721bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
  {
    url: "#2",
    component: <span>Resume</span>,
    img: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80",
  },
  {
    url: "#3",
    component: <span>Contact Me</span>,
    img: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  
];

const externalLinks = [
  //https://www.reddit.com/user/Aaryan_1824
  
  {
    url: "https://www.instagram.com/_aryan.jagadale_/",
    component: <Instagram />,
  },
  {
    url: "https://www.reddit.com/user/Aaryan_1824",
    component: <Instagram />,
  },
 
  
];

const MenuContent = () => {

  const { open,setOpen } = useContext(MenuContext);

  return (
    <div className="menu-holder">
      <div className={cn("menu-inside", { open })}>

        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map((link) => (
              <li key={link.url}>
                <Link to={link.url} onClick={() => setOpen(!open)}>{link.component}</Link>
                <img src={link.img} alt={link.img} />
              </li>
            ))}
          </ul>
          <ul className="external-nav-links">
            {externalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
              </li>
            ))}
          </ul>
        </div>



      </div>
    </div>
  );
};

export default MenuContent;
