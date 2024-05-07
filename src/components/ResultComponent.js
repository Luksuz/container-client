import React from 'react';
import { Col, Alert } from 'react-bootstrap';

const ResultComponent = ({ containerCode, searching }) => {

  return (
    <Col md="6" className='d-flex justify-content-center'>
        {containerCode && 
        <Alert variant="dark" className="rounded-5 p-3 shadow-lg ">
        <p className='fs-4 ms-3 text-dark'>Your container code:</p>
        <h1 className='ms-3'>{containerCode}</h1>
      </Alert>}

      {searching && 
      <div className='d-flex justify-content-center align-items-center'> 
        <iframe src="https://giphy.com/embed/paVRYU3Odyh3TB8CYp" width="100%" height="100%" title="Searching"></iframe></div>}
    </Col>
  );
}

export default ResultComponent;
