import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import toDos from './data';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';

function Heading(props) {
  return (
    <div class="heading">
      <h1>
        My Todo List
      </h1>
      <h2>
        Things I need to do!
      </h2>
    </div>
)};

class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <ListGroup>
          {toDos.map(item => (
            <ListGroupItem>{ item.task } - { item.status }</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default App;
