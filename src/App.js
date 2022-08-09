import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
    }
  }
  search = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  render() {

    return (
      <div className="App">
        <Search onChange={this.search}/>
        <Card search = {this.state.searchInput}/>
      </div>
    );
  }
}

export default App;
