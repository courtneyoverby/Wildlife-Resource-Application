import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ResourceItem extends Component {
  onClick = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };
  render() {
    return (
      <div>
        <ul>
          <h3 onClick={this.onClick(this.props.resources.id)}>
            {this.props.resources.name}
          </h3>
          <span>{this.props.resources.address}</span>
        </ul>
      </div>
    );
  }
}

export default withRouter(ResourceItem);
