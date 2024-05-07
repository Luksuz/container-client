import React from 'react';
import { Col, Alert } from 'react-bootstrap';

const ResultComponent = ({ containerCode, error }) => {
  return (
    <Col md="6">
      {containerCode ? 
        <Alert variant="dark" className="rounded-5 p-3 shadow-lg ">
          <p className='fs-4 ms-3 text-dark'>Your container code:</p>
          <h1 className='ms-3'>{containerCode}</h1>
        </Alert> 
        : error ? 
        <Alert variant="dark" className="rounded-5 p-3 m-2">{error}</Alert> 
        : null
      }
    </Col>
  );
}

export default ResultComponent;
