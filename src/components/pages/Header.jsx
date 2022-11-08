import { React, useState } from "react";
import "../../css/mobile/Header.css";
import "../../css/mobile/App.css";

// https://www.youtube.com/watch?v=QzW03hyw_bU   ---smooth scrol with react scroll since hash method did not work
import { Link as NavLink } from "react-scroll";

// https://www.youtube.com/watch?v=uFSu6tgYKRY&t=354s   --> detailed explanation on router dom and recent
// https://www.youtube.com/watch?v=ZpBuaYkW09k  --> simple tutorial on router dom - outdated but simple
// import { NavLink } from "react-router-dom";

// https://www.freecodecamp.org/news/how-to-implement-vertical-scrolling-in-react-using-react-router-hash-link/ ---adding smooth scroll with react-hash
// import { HashLink as NavLink} from 'react-router-hash-link';
// import '../../css/responsive/Header.css'

export default function Header(props) {
  // set color variables in css based on theme
  const root = document.querySelector(":root");
  props.mode
    ? root.style.setProperty("--bg_body", "#0a111e")
    : root.style.setProperty("--bg_body", "#EDF2F8");
  props.mode
    ? root.style.setProperty("--txt_h", "#fff")
    : root.style.setProperty("--txt_h", "#00313A");
  props.mode
    ? root.style.setProperty("--txt_p", "#ABB2BF")
    : root.style.setProperty("--txt_p", "black");
  props.mode
    ? root.style.setProperty("--primary_clr", "#0ff")
    : root.style.setProperty("--primary_clr", "#00313A");

  const [nav_is_active, set_nav_is_active] = useState(false);

  const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };
  function copy(c) {
    let container = document.querySelector(`.copy ${c}`);
    let before = window.getComputedStyle(container, "::before");
    navigator.clipboard.writeText(before.content);
  }

  return (
    <div className="header">
      <div className="social">
        <div className="line"></div>

        <div className="copy">
          <a
            id="copy1"
            href=""
            onClick={() => {
              event.preventDefault();
              copy("#copy1");
            }}
          >
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <div className="blank">
          <a target="_blank" href="https://github.com/lul-g">
            <i className="fa-brands fa-github"></i>
          </a>
          <a target="_blank" href="https://twitter.com/lulseged_admasu">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lulseged-admasu/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <a href="#home" className="logo flex">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
            fill=""
          />
        </svg>
        <span>Lul</span>
      </a>
      <div className="toggler flex">
        <input type="checkbox" name="" id="check_" />
        <label htmlFor="check_" onClick={props.toggler}></label>
      </div>
      <ul className="nav flex">
        <li>
          <a className="links" href="#home">
            home
          </a>
        </li>
        <li>
          <a className="links" href="#about">
            about
          </a>
        </li>
        <li>
          <a className="links" href="#projects">
            projects
          </a>
        </li>
        <div className="toggler flex">
          <input type="checkbox" name="" id="check" />
          <label htmlFor="check" onClick={props.toggler}></label>
        </div>
        <li>
          <a className="links" href="#qual">
            qualifications
          </a>
        </li>
        <li>
          <a className="links" href="#contact">
            contact
          </a>
        </li>
        <li>
          <a className="links" href="">
            github
          </a>
        </li>
      </ul>
      <ul className={nav_is_active ? "nav-icons actve" : "nav-icons hidden"}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "links active_page" : "links"
            }
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
          >
            <i className="fa-solid fa-house"></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "links active_page" : "links"
            }
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
          >
            <i className="fa-solid fa-user"></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "links active_page" : "links"
            }
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
          >
            <i className="fa-solid fa-diagram-project"></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "links active_page" : "links"
            }
            to="qual"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
          >
            <i className="fa-solid fa-briefcase"></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "links active_page" : "links"
            }
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={0}
          >
            <i className="fa-solid fa-paper-plane"></i>
          </NavLink>
        </li>
      </ul>
      <div className="nav-toggle flex">
        <input type="checkbox" name="" id="check-nav" />
        <label
          className="label_nav_toggler"
          onClick={() => {
            set_nav_is_active((prev) => !prev);
          }}
          htmlFor="check-nav"
        ></label>
      </div>
    </div>
  );
}

// TODO
// !1. react-scroll import is 15x larger than react-dom import---fix it
// ?2. some error about classname on 'a' tag...idk wtf it is but has sth to do with react-scroll cz react-router works fine
