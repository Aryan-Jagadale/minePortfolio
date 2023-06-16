import React, { useContext } from "react";
import {
  GitHub,
  Hexagon,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "react-feather";
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
    url: "https://res.cloudinary.com/ddaalka6i/image/upload/v1686912894/portfolio/Resume_stnyp1.pdf",
    component: <span>Resume</span>,
  },
  {
    url: "/aboutme",
    component: <span>About Me</span>,
  },
  {
    url: "/collab",
    component: <span>Collab</span>,
  },
  {
    url: "https://aaryansj.hashnode.dev/",
    component: <span>Blogs</span>,
  },
];

const externalLinks = [
  {
    url: "https://www.instagram.com/_aryan.jagadale_/",
    component: <Instagram />,
  },
  {
    url: "https://www.linkedin.com/in/aryan-jagadale-0a0a69203/",
    component: <Linkedin />,
  },
  {
    url: "https://twitter.com/Aaryan30757183",
    component: <Twitter />,
  },
  {
    url: "https://github.com/Aryan-Jagadale",
    component: <GitHub />,
  },
  {
    url: "https://hashnode.com/@AaryanJagadae",
    component: <Hexagon />,
  },
  {
    url: "mailto:aryansjagadale@gmail.com",
    component: <Mail />,
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
                    {link.url.startsWith("https") ? (
                      <a
                        href={link.url}
                        onClick={() => setOpen(!open)}
                        key={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.component}
                      </a>
                    ) : (
                      <Link
                        to={link.url}
                        onClick={() => setOpen(!open)}
                        key={link.url}
                      >
                        {link.component}
                      </Link>
                    )}
                  </li>
                </>
              );
            })}
          </ul>
          <ul className="external-nav-links">
            {externalLinks.map((link) => (
              <li key={link.url}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={link.url}
                  key={link.url}
                >
                  {link.component}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
