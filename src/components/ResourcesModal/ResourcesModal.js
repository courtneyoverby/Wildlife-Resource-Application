import React, { Component } from "react";
import { connect } from "react-redux";

class ResourcesModal extends Component {
  state = {
    name: "",
    hours: "",
    number: "",
    address: "",
    information: "",
  };

  componentDidMount() {
    // dispatch to saga to call server API
    this.props.dispatch({
      type: "FETCH_RESOURCES",
      payload: this.props.match.params.id,
    });
  }

  clickCancel = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    return (
      <div>
        <h3>Edit This Resource</h3>
        <br />
        <div>
          <button className="cancelBtn" onClick={this.clickCancel}>
            Cancel
          </button>

          <button className="editBtn">Save</button>
        </div>
        <br />

        <input value="" type="text" />
        <input placeholder="Hours" type="text" />
        <input placeholder="Phone Number" type="text" />
        <input placeholder="Address" type="text" />
        <input placeholder="Information" type="text" />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ResourcesModal);
