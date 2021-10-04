import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {  //a piece of data that describes out app
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')  //fetch is a methode of window, is a tool for make request to the server
      .then(response => response.json())
      .then(users => this.setState({ robots: users}));  //update with the users
  }

  onSearchChage = (event) => {
    this.setState({ searchfield: event.target.value }) 
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (!robots.lenght) {
      return <h1>Loading</h1>
    } else {return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChage}/>
        <Scroll>
          <CardList robots={ filteredRobots } />
        </Scroll>

      </div> );
    }
  }
}

export default App;