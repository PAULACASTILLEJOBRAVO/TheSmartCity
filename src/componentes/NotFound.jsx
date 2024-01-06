import React from 'react';
import {Row, Col, Container } from 'reactstrap';
import {Link } from "react-router-dom";

export default function NotFound() {

  return (
    <div style={{ textAlign: "center" }}>
        <Row style={{height: "1000px"}}>
          <Col lg="4">
          </Col>
          <Col lg="4" xs="12" >
          <div style={{position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}>
              <h1>404</h1>
              <h2>Page not found</h2>
              <p>
                <Link to="/Home">Volver a Home</Link>
              </p>
          </div>
          </Col>
          <Col lg="4">
          </Col>
        </Row>
    </div>
  );
}
