import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class About extends Component {
  render() {
    return (
      <Row>
        <Col className="About">

        <div dataAnimation="flip-in-x" style={{animationDelay: "0.6s"}}>
        About
        </div>
        </Col>
      </Row>
    );
  }
}

export default About;