import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ResourceItem extends Component {
  render() {
    return (
      <div>
        <ul>
          <img alt="Resource Logo" src={`/${this.props.resource.photo}`} />
          <h3>{this.props.resource.name}</h3>
        </ul>
      </div>
    );
  }
}

export default withRouter(ResourceItem);
