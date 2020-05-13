import React, { Component } from "react";
import { connect } from "react-redux";
import ResourceItem from "../ResourceItem/ResourceItem";

class ResourceList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_RESOURCES" });
  }
  render() {
    console.log(this.props.store.resources);
    return (
      <div>
        <h4>Your Current List of Resources</h4>
        <button>Add Resource</button>
        {this.props.store.resources.resourceReducer.map((resources) => {
          return <ResourceItem key={resources.id} resources={resources} />;
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ResourceList);
