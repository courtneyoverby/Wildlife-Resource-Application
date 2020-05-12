import React from "react";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (

const UserPage = (props) => (
  <div>
    <h1 id="welcome">Welcome, {props.store.user.username}!</h1>
    <p>
      Click on a photo below to read more about the wildlife rehabilitation has
      saved! Or use the navigation bar to go straight to your list of resources!
    </p>
    <img alt="Owl" src="../images/WR1.jpg"></img>
    <img alt="Porcupine" src="../images/WR2.jpg"></img>
    <img alt="Opossums" src="../images/WR3.jpg"></img>

    <LogOutButton className="log-in" />
  </div>
);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
