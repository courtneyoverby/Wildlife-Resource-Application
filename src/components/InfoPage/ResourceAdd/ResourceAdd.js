import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, TextField } from "@material-ui/core";

class ResourceAdd extends Component {
  state = {
    newResource: {
      name: "",
      hours: "",
      number: "",
      address: "",
      information: "",
    },
  };

  handleNameChange = (event) => {
    console.log("event happened!");
    this.setState({
      newResource: {
        ...this.state.newResource,
        name: event.target.value,
      },
    });
  };

  handleHoursChange = (event) => {
    console.log("event happened!");
    this.setState({
      newResource: {
        ...this.state.newResource,
        hours: event.target.value,
      },
    });
  };

  handleNumberChange = (event) => {
    console.log("event happened!");
    this.setState({
      newResource: {
        ...this.state.newResource,
        number: event.target.value,
      },
    });
  };

  handleAddressChange = (event) => {
    console.log("event happened!");
    this.setState({
      newResource: {
        ...this.state.newResource,
        address: event.target.value,
      },
    });
  };

  handleInfoChange = (event) => {
    console.log("event happened!");
    this.setState({
      newResource: {
        ...this.state.newResource,
        information: event.target.value,
      },
    });
  };

  addResource = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "ADD_RESOURCE",
      payload: this.state.newResource,
    });
  };

  render() {
    return (
      <div>
        <h3>Add Your Own Resource!</h3>
        <form onSubmit={this.addResource}>
          <TextField
            size="small"
            variant="outlined"
            color="secondary"
            placeholder="Insert Name"
            type="text"
            value={this.state.newResource.name}
            onChange={this.handleNameChange}
          />
          <TextField
            size="small"
            variant="outlined"
            color="secondary"
            placeholder="Insert Hours"
            type="text"
            value={this.state.newResource.hours}
            onChange={this.handleHoursChange}
          />
          <TextField
            size="small"
            variant="outlined"
            color="secondary"
            placeholder="Insert Number"
            type="text"
            value={this.state.newResource.number}
            onChange={this.handleNumberChange}
          />
          <TextField
            size="small"
            variant="outlined"
            color="secondary"
            placeholder="Insert Address"
            type="text"
            value={this.state.newResource.address}
            onChange={this.handleAddressChange}
          />
          <TextField
            size="small"
            variant="outlined"
            color="secondary"
            placeholder="Insert Information"
            type="text"
            value={this.state.newResource.information}
            onChange={this.handleInfoChange}
          />
          <Button size="small" variant="contained" color="secondary">
            Add Resource
          </Button>
        </form>
      </div>
    );
  }
}

export default connect()(withRouter(ResourceAdd));
