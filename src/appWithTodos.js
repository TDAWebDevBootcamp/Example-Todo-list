import React, {useState} from 'react';
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

    return (
        <Container>
          <View todos={todos}/>
          <Add />
        </Container>
    );

}
export default App;
