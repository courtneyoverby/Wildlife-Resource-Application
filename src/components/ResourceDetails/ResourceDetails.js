import React, { Component } from "react";
import { connect } from "react-redux";

class ResourceDetails extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_RESOURCES" });
  }

  backOnClick = (event) => {
    this.props.history.push("/resources");
  };

  editOnClick = (event) => {
    this.props.history.push("/edit/${this.props.match.params.id}");
  };

  render() {
    const id = Number(this.props.match.params.id);
    const filteredResource = this.props.store.resources.filter((resources) => {
      return resources.id === id;
    });
    return (
      <div>
        {filteredResource.map((details) => {
          return (
            <div key={details.id}>
              <h4>{details.name}</h4>
              <p>{details.number}</p>
              <p>{details.hours}</p>
              <p>{details.information}</p>
              <p>{details.photo}</p>
              <button>Edit</button>
              <button onClick={this.backOnClick}>Go Back</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ResourceDetails);
