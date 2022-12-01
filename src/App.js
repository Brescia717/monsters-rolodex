import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {monsters: users}
      }
      ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    
    this.setState(() => {
      // This is syntactic sugar of ES6 => naming the constant the name of an existing key in the `state` (this.searchField) 
      // implies that the key is what the variable name is (searchField) and the value is 
      // whatever the `searchField` variable's value is: `{searchField: event.target.value.toLowerCase()}
      return { searchField };
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange} 
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
