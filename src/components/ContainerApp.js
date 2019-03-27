import React, { Component } from "react";
import { Layout } from "antd";

import Clock from "./Clock";
import Buttons from "./Buttons";

const { Content } = Layout;
const TIME = 10;

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
  };

  render() {
    let formatedTime = this.formatTime(this.state.currentTime);

    return (
      <Layout>
        <Content>
          <Clock>{formatedTime}</Clock>
          <Buttons
            clockIsRunning={this.state.clockIsRunning}
            clockStart={this.clockStart}
            clockStop={this.clockStop}
            clockReset={this.clockReset}
          />
        </Content>
      </Layout>
    );
  }
}

export default ContainerApp;
