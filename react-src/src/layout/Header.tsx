import React, { useState, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/header.scss";
import search from "../assets/icons/search.svg";
import menu from "../assets/icons/menu.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
function Header() {
  const [active, setActive] = useState(false);
  const [opt, setOpt]: any = useState(null);
  const { state }: any = useContext(AppContext);
  const push = useHistory();
  const pushRoute = (path: string) => push.push(path);
  useEffect(() => {
    fetch("/wp-json/menus/v1/menus/menu")
      .then((res) => res.json())
      .then((data) => setOpt(data));
  }, []);

  return (
    <>
      <header className="Header">
        <a href="/">
          <h3 className="Header_title">{state.name}</h3>
        </a>

        <div className="Header_container-search">
          <img className="container_search-input" src={search} />
          <input className="container_search-input" placeholder="Search..." />
        </div>

        <div className={`Header_container-navbar`}>
          <img
            src={menu}
            onClick={() => {
              setActive(!active);
            }}
            className="container_navbar-icon"
          />
          <ul
            className={`container_navbar-list-${
              active ? "active" : "inactive"
            }`}
          >
            {opt &&
              opt.items.map((item: any, index: number) => {
                return (
                  <div  key={index}>
                    <a href={item.url} key={index}>
                      <li key={index}> {item.post_title} </li>
                    </a>
                  </div>
                );
              })}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
