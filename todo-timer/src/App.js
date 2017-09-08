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
  render() {
    return (
      <Grid bsClass="container">
        <Row>
          <Col md={6} mdOffset={2} xs={8}>
            <FormControl type="text" placeholder="Enter ToDo Item to Add"/>
          </Col>
          <Col md={1} mdOffsetRight={3} xs={4}>
            <Button bsStyle="primary" className="Add-btn">
              ADD
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
