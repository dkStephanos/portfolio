import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Contact extends Component {
  render() {
    return (
      <Row>
        <Col>

        <div dataAnimation="flip-in-x" style={{animationDelay: "0.6s"}}>
        Contact
        </div>
        </Col>
      </Row>
    );
  }
}

export default Contact;