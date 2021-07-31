import { Component } from "react";
import ReactDOM from "react-dom";

class Portal extends Component {
  portalRoot = document.getElementById("root-portal");

  newElement = document.createElement("div");

  componentDidMount = () => {
    this.portalRoot.appendChild(this.newElement);
  };

  componentWillUnmount = () => {
    this.portalRoot.removeChild(this.newElement);
  };

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.newElement);
  }
}

export default Portal;
