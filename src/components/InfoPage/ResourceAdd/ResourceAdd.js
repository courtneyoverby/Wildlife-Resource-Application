import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import "./ResourceAdd.css";

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
    swal({
      title: "Ready?",
      text: "Once added, your resource will be added to your list!",
      icon: "success",
      buttons: true,
      dangerMode: false,
      closeOnClickOutside: true,
    }).then((willAdd) => {
      if (willAdd) {
        event.preventDefault();
        this.props.dispatch({
          type: "ADD_RESOURCE",
          payload: this.state.newResource,
        });
        swal("You've just added a resource!", {
          icon: "success",
        });
      } else {
        swal("You changed your mind about adding a resource!");
      }
    });
    this.props.history.push(`/resources`);
  };

  render() {
    return (
      <div className="bg-img-add">
        <h3 className="add-head">Add Your Own Resource!</h3>
        <form className="columns2" onSubmit={this.addResource}>
          <div align="center">
            <input
              className="input-field2"
              placeholder="Insert Name"
              type="text"
              value={this.state.newResource.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div align="center">
            <input
              className="input-field2"
              placeholder="Insert Hours"
              type="text"
              value={this.state.newResource.hours}
              onChange={this.handleHoursChange}
            />
          </div>
          <div align="center">
            <input
              className="input-field2"
              placeholder="Insert Number"
              type="text"
              value={this.state.newResource.number}
              onChange={this.handleNumberChange}
            />
          </div>
          <div align="center">
            <input
              className="input-field2"
              placeholder="Insert Address"
              type="text"
              value={this.state.newResource.address}
              onChange={this.handleAddressChange}
            />
          </div>
          <div align="center">
            <input
              className="input-field2"
              placeholder="Insert Information"
              type="text"
              value={this.state.newResource.information}
              onChange={this.handleInfoChange}
            />
          </div>
          <button
            className="addBtn"
            size="small"
            variant="contained"
            color="secondary"
          >
            Add Resource
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(withRouter(ResourceAdd));
