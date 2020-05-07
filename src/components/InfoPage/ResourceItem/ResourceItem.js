import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ResourceItem extends Component {
  render() {
    return (
      <div>
        <ul>
          <h3>{this.props.resources.name}</h3>
          <span>{this.props.resources.hours}</span>
          <span>{this.props.resources.number}</span>
          <span>{this.props.resources.address}</span>
        </ul>
      </div>
    );
  }
}

export default withRouter(ResourceItem);
