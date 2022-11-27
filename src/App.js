import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


function fullName(params) {
  if (params) {
    return `${params.state.name.firstName} ${params.state.name.lastName}`
  }
}

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: {
        firstName: 'Paul',
        lastName: 'Brescia',
      },
      company: 'Phantom Apps LLC.',
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {fullName(this)}, I work at {this.state.company}</p>
          <button
            onClick={() => {
              this.setState(
                () => { 
                  return { 
                    name: { firstName: 'Foo', lastName: 'Bar' },
                  }
                },
                () => {
                  console.log(this.state)
                }
              )
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
