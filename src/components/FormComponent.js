import React from 'react';
import { Form, Col } from 'react-bootstrap';

const FormComponent = ({ choosenPicture, drop, imgUrl, handlePicture }) => {
  
  return (
    <Form.Group as={Col} md="6" className="bg-dark-subtle rounded-5 border border-secondary m-5 shadow-lg">
      <Form.Label htmlFor="image" className="d-block text-center">
        {!choosenPicture ? <img src={drop} alt='drop here' width="90%" />
          : <img src={imgUrl} alt="Preview" width="100%" />}
        <Form.Control 
          type="file" 
          id="image" 
          name="image" 
          onChange={handlePicture} 
          accept="image/*" 
          className="d-none"
        />
        <h3 className="m-2">Drag and drop picture here or</h3>
        <h3 className="m-2"><strong>Click</strong> to upload</h3>
      </Form.Label>
    </Form.Group>
  );
}

export default FormComponent;
