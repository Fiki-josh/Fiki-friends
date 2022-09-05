import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Card from './components/Card';
import ErrorHandler from './components/ErrorHandler'
// import users from './components/users.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      searchUsers:[],
      robots: [],
      loading: false
    }
  }
  updateSearchInput = (event) => {
    let target = event.target.value
    this.setState({searchInput:target})
    const filtered = target ? this.state.robots.filter((user)=>(user.name.toLowerCase().includes(target.toLowerCase()))) : []
    this.setState({searchUsers:[...filtered]})
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({robots: json, loading: false}))
    .catch((err) => console.log(err))
  }

  render() {
  
    return (
      <div className="App">
        <Search updateSearch={this.updateSearchInput}/>
        {
          this.state.loading && <h1 style={{textAlign: "center"}}>Loading....</h1>
        
        }
        <ErrorHandler>
          <Card users = {this.state.searchInput ? this.state.searchUsers : this.state.robots}/>
        </ErrorHandler>
      </div>
    );
  }
}
 
export default App;
