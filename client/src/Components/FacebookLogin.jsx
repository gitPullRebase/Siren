import axios from "axios";
import React from "react";
import { FacebookLogin } from "react-facebook-login-component";
//import config from "../../config/config.js";

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  /**
   * responseFacebook
   * @param {[type]} [varname] [description]
   * @return {[type]}
   */
  responseFacebook(response) {
    let userObj = {
      facebookID: response.id,
      accessToken: response.accessToken,
      username: response.name
    };
    //need to ask server to check if user is client or artist
    axios({
      method: "post",
      url: "/initialLogin",
      data: userObj
    }).then(() => {
      this.props.setFacebookId(userObj.facebookID);
    });
  }

  render() {
    let clientId = "515823602108032";
    return (
      <div className="nav-item">
        <FacebookLogin
          socialId={clientId}
          language="en_US"
          scope="public_profile,email"
          responseHandler={this.responseFacebook.bind(this)}
          xfbml={true}
          fields="id,email,name"
          version="v2.5"
          className="facebook-login loginBtn--facebook"
          buttonText="Login With Facebook"
        />
      </div>
    );
  }
}

export default Login;
