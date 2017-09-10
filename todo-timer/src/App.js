import React, { Component } from 'react';
import { Button, ButtonToolbar, FormControl, Form, Col, Row, Grid } from 'react-bootstrap';
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
  constructor(props) {
    super(props);
    this.state = {
      numItems: 0,
      inputText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert(this.state.inputText);
    <ToDoItem text={this.state.inputText}/>
  }

  handleChange(event) {
    this.setState({inputText: event.target.value});
  }

  render() {
    return (
      <Grid bsClass="container">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col md={6} mdOffset={2} xs={8}>
              <FormControl type="text" placeholder="Add todo item" onChange={this.handleChange}/>
            </Col>
            <Col md={1} xs={4}>
              <Button bsStyle="primary" className="Add-btn" type="submit">
                ADD
              </Button>
            </Col>
          </Row>
        </Form>
      </Grid>
    );
  }
}

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      elapsedTime: 0,
      isStarted: false,
      isCompleted: false
    };
  }
  render() {
    return (
      <div>
        Hello
      <label>{this.state.text}</label>
      </div>
    );
  }
}

export default App;
