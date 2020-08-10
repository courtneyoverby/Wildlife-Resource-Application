import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import ResourceItem from "../ResourceItem/ResourceItem";
import "./ResourceList.css";

class ResourceList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_RESOURCES" });
  }
  render() {
    const handleClick = (path) => (event) => {
      this.props.history.push(path);
    };
    console.log(this.props.store.resources);
    return (
      <div className="bg-img-list">
        <CssBaseline>
          <h2 className="list-header">Your Current List of Resources</h2>

          <h4 className="list-desc">
            Click a resource name to read more, or add a new resource!
          </h4>

          {this.props.store.resources.resourceReducer.map((resources) => {
            return <ResourceItem key={resources.id} resources={resources} />;
          })}

          <button className="list-add" onClick={handleClick("/add-resource")}>
            Add Resource
          </button>
        </CssBaseline>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(withRouter(ResourceList));
