import React, {useState} from 'react';
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
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
    );

}
export default App;
