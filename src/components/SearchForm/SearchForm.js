import React, {Component} from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state={
      input: ''
    }
  }

  handleOnChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  resetInput = () => {
    this.setState({input: ''})
  }

  handleClick = e => {
    e.preventDefault();
    const inputText = this.state.input.toLowerCase();
    this.props.filterNews(inputText);
    this.resetInput();
  }

  render() {
    return (
      <form>
        <input type='text' 
        name='input'
        placeholder='Search for news articles here!'
        value={this.state.input}
        onChange={e => this.handleOnChange(e)}
        />
        <button onClick={e => this.handleClick(e)}>Search Now</button>
      </form>
    )
  }

}

export default SearchForm;