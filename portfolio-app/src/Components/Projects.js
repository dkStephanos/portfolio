import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Projects extends Component {
  render() {
    return (
      <Row>
        <Col>

        <div dataAnimation="flip-in-x" style={{animationDelay: "0.6s"}}>
        Projects
        </div>
        </Col>
      </Row>
    );
  }
}

export default Projects;