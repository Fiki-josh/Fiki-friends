import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Card from './components/Card';
import users from './components/users.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      searchUsers:[]
    }
  }
  updateSearchInput = (event) => {
    let target = event.target.value
    this.setState({searchInput:target})
    const filtered = target ? users.filter((user)=>(user.name.toLowerCase().includes(target.toLowerCase()))) : []
    this.setState({searchUsers:[...filtered]})
  }

  render() {
  
    return (
      <div className="App">
        <Search updateSearch={this.updateSearchInput}/>
        <Card users = {this.state.searchInput ? this.state.searchUsers : users}/>
      </div>
    );
  }
}
 
export default App;
