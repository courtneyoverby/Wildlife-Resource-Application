import React, { Component } from "react";
import { connect } from "react-redux";
import ResourceItem from "../ResourceItem/ResourceItem.js";

class ResourceList extends Component {
  componentDidMount() {
    console.log(this.props.store.resources.map);
    this.props.dispatch({ type: "FETCH_RESOURCES" });
  }
  render() {
    return (
      <div>
        {this.props.store.resources.map((resources) => {
          return <ResourceItem key={resources.id} resources={resources} />;
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ResourceList);
