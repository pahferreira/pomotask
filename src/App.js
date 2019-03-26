import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import Clock from './components/Clock';
import './App.css';

const { Content } = Layout;

class App extends Component {

  render() {
    return (
      <div className="App">
      <Layout>
        <Content>
          <Clock/>
          <Button type="primary" onClick={console.log("Works")}>Work!</Button>
        </Content>
      </Layout> 
      </div>
    );
  }
}

export default App;
