import React, {useState} from 'react';
import {Routes,Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import View from './View'
import Add from './Add';

function App(){
  const [todos, changeTodos] = useState([ 
    { id: 1, task: "make static data", complete: false },
    { id: 2, task: "make dynamic data", complete: false }
  ])

  const updateTodoItems = (id,description,complete) => {
    const item ={id, task: description, complete};
    changeTodos((state)=> [...state, item]);
  }

    return (
      <div>

        <Navbar bg="light" expand="md">
          <Navbar.Brand>Todo list</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/view">View</Link>
              <Link className="nav-link" to="/add">Add</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Routes>
            <Route path="/" element={
              <View todos={todos}/>
            } />
            
            <Route path="/view" element={
              <View todos={todos}/>
            } />
            
            <Route path="/add" element={
              <Add  onSubmit={(id,description,complete) =>
              updateTodoItems(id,description,complete)} />
            } />
           </Routes>
        </Container>
      </div>
    );

}
export default App;
