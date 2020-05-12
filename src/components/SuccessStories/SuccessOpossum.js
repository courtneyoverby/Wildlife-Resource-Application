import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SuccessOpossum extends Component {
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

export default withRouter(SuccessOpossum);
