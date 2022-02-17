import * as React from "react";
import Loader from "../loader/loaderComponent";
// import auth0Client from '../Auth';
import "./splashScreenComponent.css";

function LoadingMessage() {
  return (
    <div className="splash-screen">
      Wait a moment while we load your app.
      <div className="loading-dot">.</div>
    </div>
  );
}

function withSplashScreen(WrappedComponent: React.FC) {
  return class extends React.Component {
    state = {
      loading: true,
    };

    async componentDidMount() {
      try {
        // await auth0Client.loadSession();
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 2000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return <Loader />;

      // otherwise, show the desired route
      return <WrappedComponent />;
    }
  };
}

export default withSplashScreen;
