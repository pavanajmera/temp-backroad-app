import React from "react";
import { pageLinks, socialLinks } from "../data";

const Footer = () => {
  return(
  <>
   <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(links=>{
          return(
            <li key={links.id}>
              <a href={links.url} className="footer-link">{links.name}</a>
            </li>
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((sociallink) =>{
          return (
            <li key={sociallink}>
              <a href={sociallink.url}>
                <i className={sociallink.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  </>
  ) 
};

export default Footer;
