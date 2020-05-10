import React, { Component } from "react";
import { connect } from "react-redux";

class ResourcesModal extends Component {
  state = {
    updatedResource: {
      id: "",
      name: "",
      hours: "",
      number: "",
      address: "",
      information: "",
    },
  };

  componentDidMount() {
    this.props.dispatch({ type: "FETCH_RESOURCES" });
  }

  handleBtn = (name) => (event) => {
    if (name === "cancel") {
      this.props.history.push(`/details/${this.props.match.params.id}`);
    }
    if (name === "save") {
      alert("Information Saved!");
      this.props.dispatch({
        type: "FETCH_RESOURCES",
        payload: this.state.updatedResource,
      });
    }
  };

  handleChangeName = (event) => {
    this.setState({
      updatedResource: {
        ...this.state.updatedResource,
        name: event.target.value,
      },
    });
  };

  handleChangeHours = (event) => {
    this.setState({
      updatedResource: {
        ...this.state.updatedResource,
        hours: event.target.value,
      },
    });
  };

  handleChangeNumber = (event) => {
    this.setState({
      updatedResource: {
        ...this.state.updatedResource,
        number: event.target.value,
      },
    });
  };

  handleChangeAddress = (event) => {
    this.setState({
      updatedResource: {
        ...this.state.updatedResource,
        address: event.target.value,
      },
    });
  };

  handleChangeInformation = (event) => {
    this.setState({
      updatedResource: {
        ...this.state.updatedResource,
        information: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <h3>Edit This Resource</h3>
        <br />
        <div>
          <button className="editBtn" onClick={this.handleBtn("cancel")}>
            Cancel
          </button>

          <button className="editBtn" onClick={this.handleBtn("save")}>
            Save
          </button>
        </div>
        <br />

        <input
          placeholder="Name"
          type="text"
          onChange={this.handleChangeName}
        />
        <input
          placeholder="Hours"
          type="text"
          onChange={this.handleChangeHours}
        />
        <input
          placeholder="Phone Number"
          type="text"
          onChange={this.handleChangeNumber}
        />
        <input
          placeholder="Address"
          type="text"
          onChange={this.handleChangeAddress}
        />
        <input
          placeholder="Information"
          type="text"
          onChange={this.handleChangeInformation}
        />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ResourcesModal);
