import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ResourceItem extends Component {
  onClick = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };

  onDeleteClick = () => {
    this.props.dispatch({
      type: "REMOVE_RESOURCE",
      payload: this.props.resources.id,
    });
  };

  render() {
    return (
      <div>
        <ul>
          <h3 onClick={this.onClick(this.props.resources.id)}>
            {this.props.resources.name}
          </h3>
          <span>{this.props.resources.address}</span>
          <button onClick={this.onDeleteClick}> Remove </button>
        </ul>
      </div>
    );
  }
}
export default connect()(withRouter(ResourceItem));
