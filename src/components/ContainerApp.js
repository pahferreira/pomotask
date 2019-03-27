import React, { Component } from "react";
import { Layout } from "antd";

import Clock from "./Clock";
import Buttons from "./Buttons";

const { Content, Footer } = Layout;
const TIME = 10;
const REST_TIME = 5;

class ContainerApp extends Component {
  state = {
    currentTime: TIME,
    clockIsRunning: false
  };

  formatTime = time => {
    let minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    let seconds = (time - minutes * 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  updateTime = () => {
    this.setState({ currentTime: this.state.currentTime - 1 });
    if (this.state.currentTime === 0) this.clockStop();
  };

  clockStart = () => {
    this.timer = setInterval(this.updateTime, 1000);
    this.setState({ clockIsRunning: true });
  };

  clockStop = () => {
    clearInterval(this.timer);
    this.setState({ clockIsRunning: false });
  };

  clockReset = () => {
    this.setState({ currentTime: TIME });
    this.clockStop();
  };

  setRest = () => {
    this.setState({ currentTime: REST_TIME });
    this.clockStop();
  };

  render() {
    let formatedTime = this.formatTime(this.state.currentTime);

    return (
      <Layout style={{ height: 100 + "vh" }}>
        <Content>
          <Clock>{formatedTime}</Clock>
          <Buttons
            clockIsRunning={this.state.clockIsRunning}
            clockStart={this.clockStart}
            clockStop={this.clockStop}
            setRest={this.setRest}
            clockReset={this.clockReset}
          />
        </Content>
        <Footer>Coded by Pah - 2019</Footer>
      </Layout>
    );
  }
}

export default ContainerApp;
