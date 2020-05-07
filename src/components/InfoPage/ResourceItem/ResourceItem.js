import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ResourceItem extends Component {
  onClick = (id) => (event) => {
    this.props.history.push(`/${id}`);
  };
  render() {
    return (
      <div>
        <ul>
          <img
            alt="Resource Photo"
            onClick={this.onClick(this.props.resource.id)}
            src={`/${this.props.resource.photo}`}
          />
          <h3>{this.props.resource.name}</h3>
        </ul>
      </div>
    );
  }
}

export default withRouter(ResourceItem);
