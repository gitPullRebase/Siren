import React from "react";
import { GoogleLogin } from "react-google-login-component";

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  responseGoogle(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({ accessToken: id_token });
    //need to ask server to check if user is client or artist

    //then the client will have the ability to check his profile
    //depending on whether he is artist or user

    //store cookie onto database for user

    //redirect them to same landing page without log in
  }

  render() {
    let clientId =
      process.env.GOOGLE_CLIENT ||
      "51693968421-6ti10a1g4idu1on0otidvjb4jdapm08f.apps.googleusercontent.com";
    return (
      <div>
        <GoogleLogin
          socialId={clientId}
          className="google-login loginBtn--google"
          scope="profile"
          fetchBasicProfile={false}
          responseHandler={this.responseGoogle}
          buttonText="Login With Google"
        />
      </div>
    );
  }
}

export default Login;
