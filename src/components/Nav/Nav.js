import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";

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
    <AppBar className="nav">
      <Toolbar>
        <Link to="/home">
          <h1 className="nav-title">Wildlife Rehabilitation Application</h1>
        </Link>
        <div className="nav-right">
          <Link className="nav-link" to={loginLinkData.path}>
            {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
            {loginLinkData.text}
          </Link>
          {/* Show the link to the info page and the logout button if the user is logged in */}
          {props.store.user.id && (
            <>
              <Link className="nav-link" to="/resources">
                Resources
              </Link>
              <LogOutButton className="nav-link" />
            </>
          )}
          {/* Always show this link since the about page is not protected
        <Link className="nav-link" to="/about">
          About
        </Link> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default connect(mapStoreToProps)(Nav);
