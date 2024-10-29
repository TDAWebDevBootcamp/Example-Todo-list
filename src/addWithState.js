import React, {useState} from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


function Add(){
  
  const [formValues, changeFormValues]=useState({
    id:0,
    description:"",
    completed:false,
  });

  const handleChange= (event) => {
    const newState={...formValues};
    if (event.target.name === "completed"){
      newState[event.target.name] = !formValues.completed;
    } else {
      newState[event.target.name] = event.target.value;
    }
    changeFormValues(newState)
  }

  return (
      <div>
        <Form>
          <Form.Group controlId="taskID">
            <Form.Label> Task ID</Form.Label>
            <Form.Control 
              name="id" 
              type="number"
              onChange={(event)=>handleChange(event)} 
            />
          </Form.Group>

          <Form.Group controlId="taskDescription">
            <Form.Label> Description</Form.Label>
            <Form.Control 
              name="description" 
              type="text"
              onChange={(event)=>handleChange(event)}  
            />
          </Form.Group>

          <Form.Group controlId="complete">
            <Form.Check 
              type="checkbox"
              id="complete"
              label="Completed?"
              onChange={(event)=>handleChange(event)} 
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
  );

}
export default Add;
