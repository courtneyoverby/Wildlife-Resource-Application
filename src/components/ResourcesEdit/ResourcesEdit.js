import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import "./ResourceEdit.css";

class ResourcesEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      hours: "",
      number: "",
      address: "",
      information: "",
    };
  }

  componentDidMount() {
    // dispatch to saga to call server API
    this.props.dispatch({
      type: "SET_DETAILS",
      payload: this.props.match.params.id,
    });
  }

  changeDetails = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value,
    });
  };

  clickSaveDetails = (event) => {
    swal({
      title: "Ready?",
      text: "Once saved, your resource will be added to your list!",
      icon: "success",
      buttons: true,
      dangerMode: false,
      closeOnClickOutside: true,
    }).then((willSave) => {
      if (willSave) {
        // dispatch to saga to make API call
        let newDetails = this.state;

        if (newDetails.name == null || newDetails.name === "") {
          newDetails.name = this.props.store.resources.resourceReducer.name;
        }

        if (newDetails.hours == null || newDetails.hours === "") {
          newDetails.hours = this.props.store.resources.resourceReducer.hours;
        }

        if (newDetails.number == null || newDetails.number === "") {
          newDetails.number = this.props.store.resources.resourceReducer.number;
        }

        if (newDetails.address == null || newDetails.address === "") {
          newDetails.address = this.props.store.resources.resourceReducer.address;
        }

        if (newDetails.information == null || newDetails.information === "") {
          newDetails.information = this.props.store.resources.resourceReducer.information;
        }

        this.props.dispatch({
          type: "SAVE_RESOURCES",
          payload: { newDetails, id: this.props.match.params.id },
        });
        swal("Poof! Your resource has been saved!", {
          icon: "success",
        });
      } else {
        swal(
          "You cancelled your edit! Click edit again to continue, or go back to your list!"
        );
      }
    });
    // navigate to the details page
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    return (
      <div className="bg-img-edit">
        <h3 className="edit-head">Edit This Resource</h3>

        <br />
        <div align="center">
          <input
            className="input-field"
            placeholder="Insert New Name"
            onChange={this.changeDetails("name")}
            type="text"
          />
        </div>
        <div align="center">
          <input
            className="input-field"
            placeholder="Insert New Hours"
            onChange={this.changeDetails("hours")}
            type="text"
          />
        </div>
        <div align="center">
          <input
            className="input-field"
            placeholder="Insert New Number"
            onChange={this.changeDetails("number")}
            type="text"
          />
        </div>
        <div align="center">
          <input
            className="input-field"
            placeholder="Insert New Address"
            onChange={this.changeDetails("address")}
            type="text"
          />
        </div>
        <div align="center">
          <input
            className="input-field"
            placeholder="Insert New Information"
            onChange={this.changeDetails("information")}
            type="text"
          />
        </div>
        <br />

        <div>
          <button className="saveBtn" onClick={this.clickSaveDetails}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ResourcesEdit);
