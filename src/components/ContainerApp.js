import React, { Component } from 'react';
import { Layout, Typography } from 'antd';

import Clock from './Clock';
import Buttons from './Buttons';
import FormTask from './tasks/FormTask';
import TaskList from './tasks/TaskList';

const { Content, Footer } = Layout;
const { Title } = Typography;
const TIME = 10;
const REST_TIME = 5;

class ContainerApp extends Component {
  state = {
    currentTime: TIME,
    clockIsRunning: false,
    taskInput: '',
    taskList: []
  };

  formatTime = time => {
    let minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    let seconds = (time - minutes * 60).toString().padStart(2, '0');

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

  onChange = e => {
    this.setState({ taskInput: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ taskList: [...this.state.taskList, this.state.taskInput] });
    this.setState({ taskInput: '' });
  };

  render() {
    let formatedTime = this.formatTime(this.state.currentTime);

    return (
      <Layout>
        <Content>
          <Title>Pomotask</Title>
          {/* <Icon
            type={this.state.clockIsRunning ? "code" : "coffee"}
            style={{ fontSize: 4 + "rem" }}
          /> */}
          <Clock>{formatedTime}</Clock>
          <Buttons
            clockIsRunning={this.state.clockIsRunning}
            clockStart={this.clockStart}
            clockStop={this.clockStop}
            setRest={this.setRest}
            clockReset={this.clockReset}
          />
          <Title level={3}>Tasklist</Title>
          <TaskList taskList={this.state.taskList} />
          <FormTask
            taskInput={this.state.taskInput}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </Content>
        <Footer>Coded by Pah - 2019</Footer>
      </Layout>
    );
  }
}

export default ContainerApp;
