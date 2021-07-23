import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import Card from "./components/card/Card";
import Navlink from "./components/navlink/NavLink";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";

class App extends React.Component {
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

  render() {
    return (
      <div>
        <Particles className="particles" options={this.options} />
        <Navlink />
        <Card>
          <Register />
        </Card>
      </div>
    );
  }
}

export default App;
