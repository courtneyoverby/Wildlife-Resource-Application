import React, { Component } from "react";
import { connect } from "react-redux";

class ResourcesEdit extends Component {
  //   state = {
  //     updatedResource: {
  //       id: "",
  //       name: "",
  //       hours: "",
  //       number: "",
  //       address: "",
  //       information: "",
  //     },
  //   };

  //   componentDidMount() {
  //     this.props.dispatch({ type: "FETCH_RESOURCES" });
  //   }

  //   handleBtn = (name) => (event) => {
  //     if (name === "cancel") {
  //       this.props.history.push(`/details/${this.props.match.params.id}`);
  //     }
  //   };

  //   handleChangeName = (event) => {
  //     this.setState({
  //       updatedResource: {
  //         ...this.state.updatedResource,
  //         name: event.target.value,
  //       },
  //     });
  //   };

  //   handleChangeHours = (event) => {
  //     this.setState({
  //       updatedResource: {
  //         ...this.state.updatedResource,
  //         hours: event.target.value,
  //       },
  //     });
  //   };

  //   handleChangeNumber = (event) => {
  //     this.setState({
  //       updatedResource: {
  //         ...this.state.updatedResource,
  //         number: event.target.value,
  //       },
  //     });
  //   };

  //   handleChangeAddress = (event) => {
  //     this.setState({
  //       updatedResource: {
  //         ...this.state.updatedResource,
  //         address: event.target.value,
  //       },
  //     });
  //   };

  //   handleChangeInformation = (event) => {
  //     this.setState({
  //       updatedResource: {
  //         ...this.state.updatedResource,
  //         information: event.target.value,
  //       },
  //     });
  //   };

  render() {
    return <div></div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ResourcesEdit);
