import React, { Component } from "react";
import { connect } from "react-redux";
import "./ResourceDetails.css";

class ResourceDetails extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_RESOURCES" });
  }

  backOnClick = (event) => {
    this.props.history.push("/resources");
  };

  editOnClick = (event) => {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  };

  render() {
    const id = Number(this.props.match.params.id);
    const filteredResource = this.props.store.resources.resourceReducer.filter(
      (resources) => {
        return resources.id === id;
      }
    );
    return (
      <div>
        {filteredResource.map((details) => {
          return (
            <div className="bg-img-details" key={details.id}>
              <h4 className="detail-name">{details.name}</h4>
              <div className="details">
                <p>{details.number}</p>
                <p>{details.hours}</p>
                <p>{details.information}</p>
              </div>
              <div>
                <button className="details-edit" onClick={this.editOnClick}>
                  Edit
                </button>
                <button className="details-delete" onClick={this.backOnClick}>
                  Go Back
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ResourceDetails);
