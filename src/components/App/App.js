import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import ResourceDetails from "../ResourceDetails/ResourceDetails";
import ResourcesEdit from "../ResourcesEdit/ResourcesEdit";

import SuccessOwl from "../SuccessStories/SuccessOwl";
import SuccessOpossum from "../SuccessStories/SuccessOpossum";
import SuccessPorcupine from "../SuccessStories/SuccessPorcupine";
import ResourceAdd from "../InfoPage/ResourceAdd/ResourceAdd";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#40231C",
    },
    secondary: {
      main: "#BFAE9F",
      light: "#F2F2F2",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline>
            <Router>
              <div>
                <Nav />
                <Switch>
                  {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
                  <Redirect exact from="/" to="/home" />
                  {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
                  <Route exact path="/home" component={LandingPage} />
                  {/* When the user is on the resource list page and selects a resource, they will be directed to the resource item page at the route below*/}
                  <ProtectedRoute
                    exact
                    path="/details/:id"
                    component={ResourceDetails}
                  />
                  {/* When the user clicks a photo on the homepage, they will be directed to */}
                  <ProtectedRoute
                    exact
                    path="/owl-success"
                    component={SuccessOwl}
                  />
                  <ProtectedRoute
                    exact
                    path="/opossum-success"
                    component={SuccessOpossum}
                  />
                  <ProtectedRoute
                    exact
                    path="/porcupine-success"
                    component={SuccessPorcupine}
                  />

                  <ProtectedRoute
                    exact
                    path="/add-resource"
                    component={ResourceAdd}
                  />
                  {/* When the user is on the resource list page and clicks Edit, they will be directed to the resource item edit page at the route below */}
                  <ProtectedRoute
                    exact
                    path="/edit/:id"
                    component={ResourcesEdit}
                  />
                  {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
                  <ProtectedRoute exact path="/admin" component={UserPage} />
                  {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
                  <ProtectedRoute
                    exact
                    path="/resources"
                    component={InfoPage}
                  />
                  {/* This works the same as the other protected route, except that if the user is logged in,
            they will be redirected to the authRedirect path provided. */}
                  <ProtectedRoute
                    exact
                    path="/login"
                    authRedirect="/admin"
                    component={LoginPage}
                  />
                  <ProtectedRoute
                    exact
                    path="/registration"
                    authRedirect="/admin"
                    component={RegisterPage}
                  />

                  {/* If none of the other routes matched, we will show a 404. */}
                  <Route render={() => <h1>404</h1>} />
                </Switch>
                <Footer />
              </div>
            </Router>
          </CssBaseline>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default connect()(App);
