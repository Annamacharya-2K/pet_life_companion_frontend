import React from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = ({ isAdmin,username }) => {
  
  const history = useNavigate();
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            PET LIFE COMPANION
          </a>{" "}
        </div>

       {!isAdmin?<div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Appointment
              </a>
            </li>
            {(!username)?<li>
              <a className="page-scroll" onClick={()=> history("/userlogin")}>
                Login
              </a>
            </li>:<>
            <li>
              <a className="page-scroll" onClick={()=> history("/userlogin")}>
                Hi, {username}
              </a>
            </li>
            <li>
              <a className="page-scroll" onClick={()=> history("/userlogin")}>
                Logout
              </a>
            </li>
            </>}
          </ul>
        </div>:''}
      </div>
    </nav>
  );
};
