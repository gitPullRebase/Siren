import React from "react";
import FacebookLogin from "./FacebookLogin.jsx";
import { Link } from "react-router-dom";

const Navbar = props => {
  /**
   * [login  and profile description]
   * @type {[sub Components]}
   * When Logged into facebook. State will change causing FacebookLogin
   * to now longer be rendered on the DOM.
   * profile icon will then appear when logged in
   */
  let login = (
    <FacebookLogin
      setFacebookId={props.setFacebookId}
      setCurrentUser={props.setCurrentUser}
    />
  );
  let profile = "";
  if (props.route !== "") {
    login = "";
    /**
     * [profile description]
     * @type {[route link]}
     * When using react router to dynamically change route "/user" or "/artist"
     * You must wrap the prop in an object for routes to work with a key of pathname.
     * This is a limitation of react router
     * Typically you could simplye put <Link to="/user">
     * <Link to={props.route}> will not work.
     */
    profile = (
      <Link to={{ pathname: props.route }}>
        <div className="profileBtn-toolbar">
          <a href="#" className="profileBtn">
            Profile
          </a>
        </div>
      </Link>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <a className="navbar-brand" href="#">
          Siren.
        </a>
      </Link>
      <ul className="navbar-nav mr-auto">
        {profile}
        {login}
      </ul>
    </nav>
  );
};

export default Navbar;
