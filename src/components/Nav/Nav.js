import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = (props) => {
  const classes = useStyles();

  let loginLinkData = {
    path: "/home",
    text: "Login / Register",
  };

  if (props.store.user.id != null) {
    loginLinkData.path = "/admin";
    loginLinkData.text = "Home";
  }

  return (
    <div className={classes.root}>
            
      <AppBar position="static">
                
        <Toolbar>
                    
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
                      
          </IconButton>{" "}
              
          <Typography align="left" variant="button" className={classes.title}>
                             
            <Link to="/home">
                            Wildlife Rehabilitation Application              
            </Link>
            {""}
                 
          </Typography>
                          
          <Link to={loginLinkData.path}>
            <Typography variant="button">
                          {loginLinkData.text}
                      
            </Typography>
              
          </Link>
                    
          {props.store.user.id && (
            <>
                            
              <Link to="/resources">
                                Resources               
              </Link>
                            
              <LogOutButton />
                          
            </>
          )}
                  
        </Toolbar>
              
      </AppBar>
          
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
