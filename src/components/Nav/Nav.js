import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";

const Nav = (props) => {
  let loginLinkData = {
    path: "/home",
    text: "Login / Register",
  };

  if (props.store.user.id != null) {
    loginLinkData.path = "/admin";
    loginLinkData.text = "Home";
  }

  return (
    <div className="nav">
      <div></div>
                           
      <Link className="head-link" to="/home">
        <img
          className="header-logo"
          src="../Images/Wildlife.jpg"
          alt="WRA Logo"
        ></img>
                  
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {loginLinkData.text}  
        </Link>
                  
        {props.store.user.id && (
          <>
                          
            <Link className="nav-link" to="/resources">
                        Resources               
            </Link>
                          
            <LogOutButton />
                        
          </>
        )}
      </div>
                 
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
