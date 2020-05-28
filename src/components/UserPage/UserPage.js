import React from "react";
import { connect } from "react-redux";
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
    <div className="container bg-img-user">
      <div>
        <h1 className="welcome-user" id="welcome">
          Welcome, {props.store.user.username}!
        </h1>

        <div className="grid">
          <figure onClick={handleClick("/owl-success")} className="images">
            <img className="anml-pix" alt="Owl" src="../Images/WR1.jpg"></img>
            <figcaption>
              <h2>Barred Owl</h2>
              <p> Hit By A Car, Recovers From Injuries</p>
              <b href="%"></b>
            </figcaption>
          </figure>
          <figure
            className="images"
            onClick={handleClick("/porcupine-success")}
          >
            <img
              className="anml-pix"
              alt="Porcupine"
              src="../Images/WR2.jpg"
            ></img>
            <figcaption>
              <h2>A Porcupine</h2>
              <p> With Mange Treated And Set Free.</p>
              <b href="%"></b>
            </figcaption>
          </figure>
          <figure onClick={handleClick("/opossum-success")} className="images">
            <img
              className="anml-pix"
              alt="Opossums"
              src="../Images/WR3.jpg"
            ></img>
            <figcaption>
              <h2>Orphaned Opossums</h2>
              <p> Get A Foster Family,Recover And Get Released!</p>
              <b href="%"></b>
            </figcaption>
          </figure>
        </div>
      </div>

      <p className="head-description">
        Click on a photo above to read more about the wildlife rehabilitation
        has saved!
      </p>
      <p className="head-description">
        Or use the navigation bar to go to the resource list!
      </p>
    </div>
  );
};

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStoreToProps)(UserPage));
