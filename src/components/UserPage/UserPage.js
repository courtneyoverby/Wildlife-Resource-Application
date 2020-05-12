import React from "react";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
// import mapStoreToProps from "../../redux/mapStoreToProps";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (

const UserPage = (props) => {
  const handleClick = (path) => (event) => {
    props.history.push(path);
  };
  return (
    <div>
      <h1 id="welcome">Welcome, {props.store.user.username}!</h1>
      <p>
        Click on a photo below to read more about the wildlife rehabilitation
        has saved! Or use the navigation bar to go to the resource list!
      </p>
      <img
        onClick={handleClick("/owl-success")}
        alt="Owl"
        src="../images/WR1.jpg"
      ></img>
      <img
        onClick={handleClick("/porcupine-success")}
        alt="Porcupine"
        src="../images/WR2.jpg"
      ></img>
      <img
        onClick={handleClick("/opossum-success")}
        alt="Opossums"
        src="../images/WR3.jpg"
      ></img>

      <LogOutButton className="log-in" />
    </div>
  );
};

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStoreToProps)(UserPage));
