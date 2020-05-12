import React from "react";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { retry } from "redux-saga/effects";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (

const UserPage = (props) => {
  const handleClick = (event) => {
    this.props.history.push(`/owl-success`);
  };
  return (
    <div>
      <h1 id="welcome">Welcome, {props.store.user.username}!</h1>
      <p>
        Click on a photo below to read more about the wildlife rehabilitation
        has saved!
      </p>
      <img onClick={handleClick} alt="Owl" src="../images/WR1.jpg"></img>
      <img alt="Porcupine" src="../images/WR2.jpg"></img>
      <img alt="Opossums" src="../images/WR3.jpg"></img>

      <LogOutButton className="log-in" />
    </div>
  );
};

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
