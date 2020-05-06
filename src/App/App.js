import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import './App.css';
import '../Components/Home/home.css';

import MainContext from "../Contexts/MainContext";

import Login from "../Components/Login/login.js";
import Home from "../Components/Home/home.js";
import Register from "../Components/Register/register.js";
import AddHabit from "../Components/Add-Habit/add-habit.js";

import Profile from "../Components/Profile/profile.js";
import Habit from "../Components/Habit/habit.js";
import EditHabit from "../Components/Edit-Habit/edit-habit.js";
import Settings from "../Components/Settings/settings.js";

import HomeIcon from "../Assets/home-icon.svg"
import PlusIcon from "../Assets/plus-icon.svg"
import ProfileIcon from "../Assets/profile-icon.svg"


export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

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
            return <Home {...routeProps} />
          }}
        />

        <Route
          path="/add-habit"
          render={routeProps => {
            return <AddHabit {...routeProps} />
          }}
        />

        <Route
          path="/profile"
          render={routeProps => {
            return <Profile {...routeProps} />
          }}
        />

        <Route
          path="/habit"
          render={routeProps => {
            return <Habit {...routeProps} />
          }}
        />

        <Route
          path="/edit-habit"
          render={routeProps => {
            return <EditHabit {...routeProps} />
          }}
        />

        <Route
          path="/settings"
          render={routeProps => {
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
      <MainContext.Provider value={this.state}>
        <div className="App">
          {this.renderMainRoutes()}

          {window.location.pathname === "/" | window.location.pathname === "/register"
            ? ""
            : this.renderBottomBar()
          }  
        </div>
      </MainContext.Provider>
    );
  }
}

