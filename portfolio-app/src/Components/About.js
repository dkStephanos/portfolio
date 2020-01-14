import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../Stylesheets/About.css';

class About extends Component {
  render() {
    return (
      <Row>
        <Col>

        <div className="about">
      <div className="content">
        <h1>I<b>'</b>m<br/>Koi<br/>Stephanos<b>.</b><br/></h1>
        <p>SOFTWARE ENGINEER: JavaScript, React, Rails</p>
      </div>
    </div>
        </Col>
      </Row>
    );
  }
}

export default About;