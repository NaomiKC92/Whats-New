import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'
import './App.css';


import NewsContainer from '../NewsContainer/NewsContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: local
    }
  }

  render () {
    return (
      <div className="app">
        <NewsContainer 
          articles={this.state.currentPage}
        />
      </div>
    );
  }
}

export default App;
