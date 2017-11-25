import axios from "axios";
import React from "react";
import { FacebookLogin } from "react-facebook-login-component";

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  responseFacebook(response) {
    console.log(response);
    let userObj = {
      accessToken: response.accessToken,
      username: response.name
    };

    //need to ask server to check if user is client or artist
    axios({
      method: 'POST',
      url: '/initialLogin',
      data: userObj
    }).then( () => {
      //redirect to appropriate page

    });

    //then the client will have the ability to check his profile
    //depending on whether he is artist or user

    //store cookie onto database for user

    //redirect them to same landing page without log in
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
