import React from "react";
import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import "./UserPage.css";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (

const UserPage = (props) => {
  const handleClick = (path) => (event) => {
    props.history.push(path);
  };

  return (
    <div>
      <h1 className="welcome-user" id="welcome">
        Welcome, {props.store.user.username}!
      </h1>
      <p className="head-desc">
        Click on a photo below to read more about the wildlife rehabilitation
        has saved! Or use the navigation bar to go to the resource list!
      </p>
      <div className="grid">
        <figure className="image-one">
          <img
            className="anml-pix"
            onClick={handleClick("/owl-success")}
            alt="Owl"
            src="../images/WR1.jpg"
          ></img>
          <p className="animal-desc">
            Barred Owl Hit By A Car, Recovers From Injuries
          </p>
        </figure>
        <figure className="image-two">
          <img
            className="anml-pix"
            onClick={handleClick("/porcupine-success")}
            alt="Porcupine"
            src="../images/WR2.jpg"
          ></img>
          <p className="animal-desc">A Porcupine With Mange</p>
        </figure>
        <figure className="image-three">
          <img
            className="anml-pix"
            onClick={handleClick("/opossum-success")}
            alt="Opossums"
            src="../images/WR3.jpg"
          ></img>
          <p className="animal-desc">Orphaned Opossums Get A Fostered</p>
        </figure>
      </div>
    </div>
  );
};

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStoreToProps)(UserPage));
