import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          ToDo Timer
        </div>
        <div className="App-body">
          <AddItem />
        </div>
      </div>
    );
  }
}

class AddItem extends Component {
  render() {
    return (
      <div>
        <AddItemInput />
        <AddItemButton />
      </div>
    );
  }
}

class AddItemInput extends Component {
  render() {
    return (
      <input>
      </input>
    );
  }
}

class AddItemButton extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary">
          ADD
        </Button>
      </ButtonToolbar>
    );
  }
}

export default App;
