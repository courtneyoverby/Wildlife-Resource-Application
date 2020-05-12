import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

import "./LandingPage.css";

class LandingPage extends Component {
  state = {
    heading: "Why is rehabilitating wildlife important?",
  };

  onLogin = (event) => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <p>
              Rehabilitating wildlife isn't easy. Why should we take the time,
              energy, and money to provide for wild animals that have become
              sick or injured? Helping animals in need promotes ecosystem
              health, meaning it helps our wildlife become healthier so that
              they can return to their ecosystems and continue their role.
            </p>

            <p>
              Because wild animals don't have owners like our pets do, they
              belong to the state they live in. Wildlife rehabilitation centers
              are organizations that the state and federal governments have
              given permission to provide the care wild animals need when they
              becomes sick or injured.
            </p>

            <p>
              These organizations also aid in disease monitoring! They are
              normally the first ones to learn about disease outbreaks, which is
              very important for disease such as rabies or West Nile Virus- both
              that wildlife can give to people! Want to learn about the wildlife
              rehabilitation centers in Missouri and Kansas? Sign up or log in!
            </p>
          </div>
          <div className="grid-col grid-col_4">
            <h3>Already a Member?</h3>
            <button className="btn btn_sizeFull" onClick={this.onLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
