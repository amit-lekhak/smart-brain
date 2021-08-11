import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import Card from "./components/card/Card";
import Navlink from "./components/navlink/NavLink";
import Login from "./containers/login/Login";
import { fetchProfile, getToken } from "./utility/helperFunctions";
import Loading from "./components/Loading/Loading";

const Register = React.lazy(() => import("./containers/register/Register"));
const Home = React.lazy(() => import("./containers/home/Home"));

class App extends React.Component {
  state = {
    route: "login",
    error: "",
    user: {
      name: "",
      entries: "",
      id: "",
      joined: "",
      email: "",
      age: "",
      pet: "",
    },
  };

  options = {
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },

      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
    },
  };

  componentDidMount() {
    const token = getToken();

    if (!token) return;

    fetchProfile(token)
      .then((data) => {
        if (data.error) {
          return this.updateUserState({
            error: data.error,
            user: {},
            route: "login",
          });
        }

        return this.updateUserState({
          error: "",
          user: data.user,
          route: "home",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onRouteChange = (route) => {
    if (this.state.route !== route) {
      this.setState({ route: route, error: "" });
    }
  };

  updateUserState = ({ error, user, route }) => {
    this.setState({ error, user, route });
  };

  render() {
    return (
      <div>
        <Particles className="particles" options={this.options} />
        <Navlink
          updateUserState={this.updateUserState}
          route={this.state.route}
          user={this.state.user}
          onRouteChange={this.onRouteChange}
        />
        {this.state.route === "home" ? (
          <React.Suspense fallback={Loading()}>
            <Home user={this.state.user} />
          </React.Suspense>
        ) : (
          <Card>
            {this.state.route === "login" ? (
              <Login
                updateUserState={this.updateUserState}
                onRouteChange={this.onRouteChange}
              />
            ) : (
              <React.Suspense fallback={Loading()}>
                <Register
                  updateUserState={this.updateUserState}
                  onRouteChange={this.onRouteChange}
                />
              </React.Suspense>
            )}
          </Card>
        )}
        {this.state.error && (
          <p style={{ color: "red", textAlign: "center", fontSize: "2rem" }}>
            {this.state.error}
          </p>
        )}
      </div>
    );
  }
}

export default App;
