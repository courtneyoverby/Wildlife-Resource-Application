import React, { Component } from "react";
import { connect } from "react-redux";
class ResourcesEdit extends Component {
  constructor(props) {
    super(props);

    this.setState = {
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
    console.log(newDetails);
    // navigate to the details page
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    return (
      <div>
        <h3>Edit This Resource</h3>
        <br />
        <div>
          <button
            className="saveBtn"
            size="small"
            variant="contained"
            color="secondary"
            onClick={this.clickSaveDetails}
          >
            Save
          </button>
        </div>
        <br />
        <input
          size="small"
          variant="outlined"
          color="secondary"
          placeholder="Insert New Name"
          onChange={this.changeDetails("name")}
          type="text"
        />
        <input
          size="small"
          variant="outlined"
          color="secondary"
          placeholder="Insert New Hours"
          onChange={this.changeDetails("hours")}
          type="text"
        />
        <input
          size="small"
          variant="outlined"
          color="secondary"
          placeholder="Insert New Number"
          onChange={this.changeDetails("number")}
          type="text"
        />
        <input
          size="small"
          variant="outlined"
          color="secondary"
          placeholder="Insert New Address"
          onChange={this.changeDetails("address")}
          type="text"
        />
        <input
          size="small"
          variant="outlined"
          color="secondary"
          placeholder="Insert New Information"
          onChange={this.changeDetails("information")}
          type="text"
        />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ResourcesEdit);
