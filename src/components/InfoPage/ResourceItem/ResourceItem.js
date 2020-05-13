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

  // addResource = () => {
  //   this.props.dispatch({
  //     type: "ADD_RESOURCE",
  //     payload: this.props.resources.id,
  //   });
  // };

  render() {
    const handleClick = (path) => (event) => {
      this.props.history.push(path);
    };
    return (
      <div>
        <ul>
          <button onClick={handleClick("/add-resource")}> Add Resource </button>
          <p>{this.props.resources.pic}</p>
          <h4 onClick={this.onClick(this.props.resources.id)}>
            {this.props.resources.name}
          </h4>
          <span>{this.props.resources.address}</span>
          <button onClick={this.onDeleteClick}> Remove </button>
        </ul>
      </div>
    );
  }
}
export default connect()(withRouter(ResourceItem));
