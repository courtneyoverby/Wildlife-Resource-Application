import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class ResourceItem extends Component {
  onClick = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };

  onDeleteClick = () => {
    console.log("deleted!");
    this.props.dispatch({
      type: "REMOVE_RESOURCE",
      payload: this.props.resources.id,
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <ul>
              <p>{this.props.resources.pic}</p>
              <h4 onClick={this.onClick(this.props.resources.id)}>
                {this.props.resources.name}
              </h4>
              <span>{this.props.resources.address}</span>
              <button onClick={this.onDeleteClick}> Delete </button>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(withRouter(ResourceItem));
