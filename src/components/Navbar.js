import React from "react";
import { pageLinks, socialLinks } from "../data";
import logo from "../images/logo.svg"

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) =>{
            return (
              <li key={link.id}>
                <a href={link.url} className="nav-link">{link.name}</a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((sociallink) =>{
            return (
              <li key={sociallink.id}>
                <a href={sociallink.url} target="_blank" className="nav-icon">
                  <i className={sociallink.icon}></i>
                </a>
              </li>
            ) 
          })}
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
