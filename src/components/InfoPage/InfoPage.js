import React, { Component } from "react";
import ResourceList from "./Resource List/ResourceList";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {
  render() {
    return (
      <div>
        <ResourceList />
      </div>
    );
  }
}

export default InfoPage;
