// Libraries
import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from "apollo-link-context";

// Styles
import './App.css';
import '../Components/Home/home.css';

// Assets
import HomeIcon from "../Assets/home-icon.svg"
import PlusIcon from "../Assets/plus-icon.svg"
import ProfileIcon from "../Assets/profile-icon.svg"

// Context, Service, Config
import MainContext from "../Contexts/MainContext";
import TokenHelpers from "../Services/token-helpers"
import config from '../config'

// Components
import Login from "../Components/Login/login.js";
import Home from "../Components/Home/home.js";
import Register from "../Components/Register/register.js";
import AddHabit from "../Components/Add-Habit/add-habit.js";
import Profile from "../Components/Profile/profile.js";
import Habit from "../Components/Habit/habit.js";
import EditHabit from "../Components/Edit-Habit/edit-habit.js";
import Settings from "../Components/Settings/settings.js";
import ErrBoundary from "../Components/ErrBoundary/err-boundary"

// Apollo Link will send token with every request
const authLink = setContext((_, { headers }) => {
  const token = TokenHelpers.getAuthToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : null,
    }
  }
})

const httpLink = new createHttpLink({ uri: `${config.API_ENDPOINT}` })

// Instantiate Apollo Client
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})


export default class App extends Component {

  renderMainRoutes() {
    return (
      <>
        <Route
          path="/"
          exact
          render={routeProps => {
            return <Login {...routeProps} />
          }}
        />

        <Route
          path="/register"
          render={routeProps => {
            return <Register {...routeProps} />
          }}
        />

        <Route
          path="/home"
          render={routeProps => {
            if (!TokenHelpers.hasAuthToken()) {
              return <Redirect to="/" />
            }
            return <Home {...routeProps} />
          }}
        />

        <Route
          path="/add-habit"
          render={routeProps => {
            if (!TokenHelpers.hasAuthToken()) {
              return <Redirect to="/" />
            }
            return <AddHabit {...routeProps} />
          }}
        />

        <Route
          path="/profile"
          render={routeProps => {
            if (!TokenHelpers.hasAuthToken()) {
              return <Redirect to="/" />
            }
            return <Profile {...routeProps} />
          }}
        />

        <Route
          path="/habit/:id"
          render={routeProps => {
            if (!TokenHelpers.hasAuthToken()) {
              return <Redirect to="/" />
            }
            return <Habit {...routeProps} />
          }}
        />

        <Route
          path="/edit-habit/:id"
          render={routeProps => {
            if (!TokenHelpers.hasAuthToken()) {
              return <Redirect to="/" />
            }
            return <EditHabit {...routeProps} />
          }}
        />

        <Route
          path="/settings"
          render={routeProps => {
            if (!TokenHelpers.hasAuthToken()) {
              return <Redirect to="/" />
            }
            return <Settings {...routeProps} />
          }}
        />
      </>
    )
  }

  renderBottomBar() {
    return (
      <>
        <div className="bottom-toolbar">
          <button>
            <Link to="/home">
              <img src={HomeIcon} alt="" className="icon-bar-icon" />
            </Link>
          </button>

          <button> 
            <Link to="/add-habit">
              <img src={PlusIcon} alt="" className="icon-bar-icon" />
            </Link>
          </button>

          <button>
            <Link to="/profile">
             <img src={ProfileIcon} alt="" className="icon-bar-icon" />
            </Link>
          </button>
        </div>	
      </>
    )
  }

  render() {
    return (
      <ApolloProvider client={apolloClient}>
      <MainContext.Provider value={this.state}>
        <ErrBoundary>
        <div className="App">
          {this.renderMainRoutes()}
        </div>
          </ErrBoundary>
      </MainContext.Provider>
      </ApolloProvider>
    );
  }
}

