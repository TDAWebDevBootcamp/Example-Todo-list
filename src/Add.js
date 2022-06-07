import React, {useState} from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import toastr from 'toastr';
import 'toastr/build/toastr.min.css';



function Add(props){
  
  const [formValues, changeFormValues]=useState({
    id:0,
    description:"",
    completed:false,
  });

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  const handleChange= (event) => {
    const newState={...formValues};
    if (event.target.name === "completed"){
      newState[event.target.name] = !formValues.completed;
    } else {
      newState[event.target.name] = event.target.value;
    }
    changeFormValues(newState)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(formValues.id, formValues.description, formValues.completed);
    toastr["success"]("Todo added", "Success")
    changeFormValues({
      id: 0,
      description:"",
      completed: false
    })
  }

  return (
      <div>
        <Form onSubmit={(event) => submitHandler(event)}>
          <Form.Group controlId="taskID">
            <Form.Label> Task ID</Form.Label>
            <Form.Control 
              name="id" 
              type="number"
              value={formValues.id}
              onChange={(event)=>handleChange(event)} 
            />
          </Form.Group>

          <Form.Group controlId="taskDescription">
            <Form.Label> Description</Form.Label>
            <Form.Control 
              name="description" 
              type="text"
              value={formValues.description}
              onChange={(event)=>handleChange(event)}  
            />
          </Form.Group>

          <Form.Group controlId="completed">
            <Form.Check 
              type="checkbox"
              name="completed"
              label="Completed?"
              value={formValues.completed}
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
