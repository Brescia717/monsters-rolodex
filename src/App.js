import { useState, useEffect } from 'react'

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('Monsters Rolodex');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // (callback(), [dependencies])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))  
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }

  const onTitleChange = (event) => {
    const titleFieldString = event.target.value;
    setTitle(titleFieldString)
  }

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
      />
      <br />
      <SearchBox
        className='title'
        onChangeHandler={onTitleChange} 
        placeholder='set title'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
