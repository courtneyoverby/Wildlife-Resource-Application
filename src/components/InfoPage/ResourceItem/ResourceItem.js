import React, { Component } from "react";
import swal from "sweetalert";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Grid, IconButton, Container, Typography } from "@material-ui/core/";
import { CssBaseline } from "@material-ui/core";
import "./ResourceItem.css";

import DeleteIcon from "@material-ui/icons/Delete";

const styles = (theme) => ({
  root: {
    maxWidth: "90%",
    width: "920px",
    margin: "15px auto",
    paddingTop: 10,
    paddingBottom: 10,
  },
  paperTransparent: {
    maxWidth: "90%",
    width: "920px",
    margin: "15px auto",
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#fff0",
  },
  padding: {
    padding: "8px 20px",
  },
  selectorSize: {
    minWidth: 600,
  },
  inputMargin: {
    margin: "10px 0px",
    minWidth: 600,
  },
});

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
        this.props.history.push(`/resources`);
      } else {
        swal("Your resource is safe!");
      }
    });
    this.props.history.push(`/resources`);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CssBaseline>
          <Typography
            className="resource-item"
            onClick={this.onClick(this.props.resources.id)}
            variant="h6"
          >
            {this.props.resources.name}
            <Typography
              className="resource-item"
              classes={{ padding: classes.padding }}
              elevation={2}
            >
              {this.props.resources.address}
              <IconButton
                className="item-delete"
                aria-label="delete"
                onClick={this.onDeleteClick}
              >
                <DeleteIcon />
              </IconButton>
            </Typography>
          </Typography>
        </CssBaseline>
      </div>
    );
  }
}
export default withStyles(styles)(connect()(withRouter(ResourceItem)));
