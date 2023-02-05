import React from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbutton.css";

const Navbutton = () => {
  const [menuIcon, setMenuIcon] = useState(false);
//   const [show, setShow] = useState(false)

  return (
    <div >
      
      <div className={ menuIcon ? "nav-sidebar-2 active" : "nav-sidebar-2 "}>
        <nav className="side-nav-2">
        <a href="#home"
            className="side-nav-links-2"
            style={{textDecoration: "none",color: "#16a085"  }} 
            onClick={() => setMenuIcon(false)} >
            <p>Home</p>
          </a>
          <div className="side-nav-div-2">
            {/* <div>
              <p>PUBLIC</p>
            </div> */}
            <a href="#services"
              className="side-nav-links-2"
              style={{textDecoration: "none",color: "#16a085" }} 
              onClick={() => setMenuIcon(false)} >
              <p>services </p>
            </a>
            <a href="#about"
              className="side-nav-links-2"
              style={{ textDecoration: "none",color: "#16a085"  }}
              onClick={() => setMenuIcon(false)} >
              <p>about</p>
            </a>
            <a href="#doctors"
              className="side-nav-links-2"
              style={{textDecoration: "none" ,color: "#16a085"}}
              onClick={() => setMenuIcon(false)} >
              <p>doctors</p>
            </a>
            <a
              href="#doctors"
              className="side-nav-links-2 side-nav-list-2"
              style={{textDecoration: "none",color: "#16a085" }}
              onClick={() => setMenuIcon(false)} >
              <p > Products </p>
              </a>
              <a href="#book"
              className="side-nav-links-2 side-nav-list-2"
              style={{textDecoration: "none",color: "#16a085" }}
              onClick={() => setMenuIcon(false)} >
              <p>book </p>
            </a>

            <a href="#review"
              className="side-nav-links-2 side-nav-list-2"
              style={{textDecoration: "none",color: "#16a085" }}
              onClick={() => setMenuIcon(false)} >
              <p>review </p>
            </a>

            <a href="#blogs"
              className="side-nav-links-2 side-nav-list-2"
              style={{textDecoration: "none",color: "#16a085" }}
              onClick={() => setMenuIcon(false)} >
              <p>blogs </p>
            </a>

            <CgClose
            style={{textDecoration: "none",color: "#16a085" }}
                name="close-outline"
                className="mobile-nav-icon close-outline" 
                onClick={() => setMenuIcon(false)}
              />
           </div>
        </nav>
        
      
      </div>
      <div className="mobile-navbar-btn">
              <CgMenu
              style={{textDecoration: "none",color: "#16a085" }}
                name="menu-outline"
                className="mobile-nav-icon"
                onClick={() =>
                     setMenuIcon(true)
                }
               
                />
                
               
            </div> 
    </div>
    
  );
};

export default Navbutton;
