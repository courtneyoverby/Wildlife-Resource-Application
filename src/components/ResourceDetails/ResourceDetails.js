import React, { Component } from "react";
import { connect } from "react-redux";

class ResourceDetails extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_RESOURCES" });
  }

  render() {
    const id = Number(this.props.match.params.id);
    const filteredResource = this.props.store.resources.filter((resources) => {
      return resources.id === id;
    });
    console.log(filteredResource);
    return (
      //   <div>
      //     <span>{this.props.store.resources.number}</span>
      //     <span>{this.props.store.resources.experience}</span>
      //     <span>{this.props.store.resources.hours}</span>
      //   </div>
      <div>
        {filteredResource.map((details) => {
          return (
            <div key={details.id}>
              <h4>{details.name}</h4>
              <p>{details.number}</p>
              <p>{details.hours}</p>
              <p>{details.experience}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ResourceDetails);
