import React, { Component } from "react";
import { Layout, Button } from "antd";
import Clock from "./components/Clock";
import "./App.css";

const { Content } = Layout;

class App extends Component {
  state = {
    currentTime: 10,
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
    if (this.state.clockIsRunning) {
      window.alert("Clock is already running!");
    } else {
      this.timer = setInterval(this.updateTime, 1000);
      this.setState({ clockIsRunning: true });
    }
  };

  clockStop = () => {
    clearInterval(this.timer);
    this.setState({ clockIsRunning: false });
  };

  clockReset = () => {
    this.setState({ currentTime: 1500 });
  };

  render() {
    let formatedTime = this.formatTime(this.state.currentTime);

    return (
      <div className="App">
        <Layout>
          <Content>
            <Clock>{formatedTime}</Clock>
            <Button onClick={this.clockStart}>Work!</Button>
            <Button onClick={this.clockStop}>Pause</Button>
            <Button type="danger" onClick={this.clockReset}>
              Reset
            </Button>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
