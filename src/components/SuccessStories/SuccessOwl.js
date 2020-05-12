import React, { Component } from "react";

class SuccessOwl extends Component {
  render() {
    const handleClick = (path) => (event) => {
      this.props.history.push(path);
    };

    return (
      <div>
        <button onClick={handleClick("/admin")}>Go Back</button>
      </div>
    );
  }
}

export default SuccessOwl;
