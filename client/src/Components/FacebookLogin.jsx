import axios from "axios";
import React from "react";
import { FacebookLogin } from "react-facebook-login-component";

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
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
      //redirect to initial page without login button and with profile button + log out button
    });
  }

  render() {
    let clientId = process.env.FACEBOOK_CLIENT || "515823602108032";
    return (
      <div className="nav-item">
        <FacebookLogin
          socialId={clientId}
          language="en_US"
          scope="public_profile,email"
          responseHandler={this.responseFacebook}
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
