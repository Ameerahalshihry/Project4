import React, { Component } from "react";
import './App.css';
import Nav from './components/nav'
import { getUser, Signout } from "./components/services/authServ";
import SigninForm from "./components/authForms/signinForm";
import SignupForm from "./components/authForms/signupForm";
import ChangePassword from "./components/authForms/chanagePassword";
import Home from "./components/Home";
import Profile from "./components/profile";
import UserInfo from "./components/userInfo";
import Post from "./components/post";

class App extends Component {
  state = {
    user: null,
    activePage: "Home"
  };
  changeActivePage = activePage => {
    this.setState({ activePage });
  };
  onSignin = () => {
    this.setState({ user: getUser() });
    this.changeActivePage("profile");
  };
  onSignout = () => {
    this.setState({ user: null });
    Signout();
  };
  render() {
    const { user, activePage } = this.state;
    return (
      <div>
        <Nav
          changeActivePage={this.changeActivePage}
          onSignout={this.onSignout}
        />
         <div >
          {activePage === "home" ? <Home /> : ""}
          {activePage === "sign-in" ? (
            <SigninForm onSignin={this.onSignin} />
          ) : (
              ""
            )}
          {activePage === "sign-up" ? (
            <SignupForm onSignin={this.onSignin} />
          ) : (
              ""
            )}
          {activePage === "change-password" ? (
            <ChangePassword changeActivePage={this.changeActivePage} />
          ) : (
              ""
            )}
          {activePage === "UserInfo" ? <UserInfo changeActivePage={this.changeActivePage} /> : ""}
          {activePage === "profile" ? <Profile /> : ""}
          {activePage === "posts" ? <Post /> : ""}
        </div>
    </div> 
 
     ) }
          }
export default App;
