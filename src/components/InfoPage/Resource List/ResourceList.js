import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Paper,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import ResourceItem from "../ResourceItem/ResourceItem";
import "./ResourceList.css";

const styles = (theme) => ({
  root: {
    maxWidth: "90%",
    width: "920px",
    margin: "15px auto",
    paddingTop: 10,
    paddingBottom: 10,
  },
  paperTransparent: {
    maxWidth: "90%",
    width: "920px",
    margin: "15px auto",
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#fff0",
  },
  padding: {
    padding: "8px 20px",
  },
  selectorSize: {
    minWidth: 600,
  },
  inputMargin: {
    margin: "10px 0px",
    minWidth: 600,
  },
});

class ResourceList extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_RESOURCES" });
  }
  render() {
    const { classes } = this.props;
    const handleClick = (path) => (event) => {
      this.props.history.push(path);
    };
    console.log(this.props.store.resources);
    return (
      <div className="bg-img-list">
        <CssBaseline>
          <Paper classes={{ root: classes.root }} elevation={2}>
            <Typography
              classes={{ root: classes.padding }}
              className="list-header"
              variant="h4"
            >
              List of Resources
            </Typography>
            <Typography
              classes={{ root: classes.padding }}
              className="list-desc"
            >
              Click a resource name to read more, or add a new resource!
            </Typography>
          </Paper>
          <Container align="center">
            <Button className="list-add" onClick={handleClick("/add-resource")}>
              Go Back
            </Button>
            <Button
              variant="contained"
              className="list-add"
              onClick={handleClick("/add-resource")}
            >
              Add Resource
            </Button>
          </Container>
          {this.props.store.resources.resourceReducer.map((resources) => {
            return (
              <Paper classes={{ root: classes.root }} elevation={2}>
                <Typography classes={{ root: classes.padding }}>
                  <ResourceItem key={resources.id} resources={resources} />
                </Typography>
              </Paper>
            );
          })}
        </CssBaseline>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default withStyles(styles)(
  connect(mapStoreToProps)(withRouter(ResourceList))
);
