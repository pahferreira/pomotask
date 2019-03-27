import React, { Component } from "react";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./App.css";

import ContainerApp from "./components/ContainerApp";

const alertOptions = {
  position: "bottom center",
  offset: "30px"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <ContainerApp />
        </AlertProvider>
      </div>
    );
  }
}

export default App;
