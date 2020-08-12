import React, { Component } from "react";
import swal from "sweetalert";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, IconButton, Container, Typography } from "@material-ui/core/";
import { CssBaseline } from "@material-ui/core";
import "./ResourceItem.css";

import DeleteIcon from "@material-ui/icons/Delete";

class ResourceItem extends Component {
  onClick = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };

  onDeleteClick = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this resource!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.props.dispatch({
          type: "REMOVE_RESOURCE",
          payload: this.props.resources.id,
        });
        swal("Poof! Your resource has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your resource is safe!");
      }
    });
  };

  render() {
    return (
      <div>
        <CssBaseline>
          <Typography onClick={this.onClick(this.props.resources.id)}>
            {this.props.resources.name}
            <p>
              {this.props.resources.address}
              <IconButton
                className="item-delete"
                aria-label="delete"
                onClick={this.onDeleteClick}
              >
                <DeleteIcon />
              </IconButton>
            </p>
          </Typography>
        </CssBaseline>
      </div>
    );
  }
}
export default connect()(withRouter(ResourceItem));
