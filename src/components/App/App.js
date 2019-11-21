import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'
import './App.css';
import Menu from '../Menu/Menu'
import NewsContainer from '../NewsContainer/NewsContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: [...local],
      local,
      health,
      entertainment,
      science,
      technology
    }
  }

  switchTopic = (e) => {
   this.setState({current: this.state[e.target.id]})
  }

  render() {
    return (
      <div className="app">
        <Menu switchTopic={this.switchTopic}/>
        <NewsContainer
          articles={this.state.current}
        />
      </div>
    );
  }
}

export default App;
