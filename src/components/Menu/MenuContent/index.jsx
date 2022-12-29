import React, { useContext } from "react";
import { Instagram,Linkedin } from "react-feather";
import "./style.scss";
import { MenuContext } from "../MenuManager";
import cn from "classnames";
//import Reddit from "../../../images/reddit.png"
import { Link } from "react-router-dom";

const internalLinks = [
  {
    url: "/",
    component: <span>Home</span>,
  },
  {
    url: "#2",
    component: <span>Resume</span>,
  },
  {
    url: "/collab",
    component: <span>Collab</span>,
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
    component: <span>Reddit</span>,
  },
  {
    url: "https://www.linkedin.com/in/aryan-jagadale-0a0a69203/",
    component: <Linkedin />,
  },
];

const MenuContent = () => {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <div className="menu-holder">
      <div className={cn("menu-inside", { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map((link) => {
              return (
                <>
                <li key={link.url}>
                  <Link to={link.url} onClick={() => setOpen(!open)}  key={link.url}>
                    {link.component}
                  </Link>
                  
                </li>
                
                
                </>
                


              );
            })}
          </ul>
          <ul className="external-nav-links">
            {externalLinks.map((link) => (
              <li key={link.url}>
                <a target="_blank" rel="noreferrer" href={link.url}>{link.component}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
