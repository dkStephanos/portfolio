import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Resume extends Component {
  render() {
    return (
      <Row>
        <Col>

        <div dataAnimation="flip-in-x" style={{animationDelay: "0.6s"}}>
        Resume
        </div>
        </Col>
      </Row>
    );
  }
}

export default Resume;