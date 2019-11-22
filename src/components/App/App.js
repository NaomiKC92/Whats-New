import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'
import './App.css';
import Menu from '../Menu/Menu'
import NewsContainer from '../NewsContainer/NewsContainer'
import SearchForm from '../SearchForm/SearchForm';

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

  filterNews = input => {
    const results = this.state.current.filter(article => article.headline.toLowerCase().includes(input))
    console.log(this.state)
    this.setState({current: results})
    console.log(this.state)
  }

  render() {
    return (
      <div className="app">
        <Menu switchTopic={this.switchTopic}/>
        <main>
          <SearchForm filterNews={this.filterNews}/>
          <NewsContainer
          articles={this.state.current}
        />
        </main>
      </div>
    );
  }
}

export default App;
