import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../Stylesheets/Resume.css';

class Resume extends Component {
  render() {
    return (
      <Row>
        <Col>
<div className="resume">
      <div className="content">
      <a className="logo"></a>
      <p>
        I am a software engineer with a passion for innovative solutions. I have a bachlors of science with a philosophy major and computing minor and went on to graduate from Flatiron School's software engineering program. I recently accepted a position as a technical consultant with DigiDems to assist the Democratic party in their efforts to win back Congress in 2018. I am currently specializing in React, JavaScript, and Rails, and have a background in object-oriented programming with languages like Java and C#. I bring strong skills in agile application development, as well as an eagerness to develop skills that help driven companies enrich their programming culture and realize their specific goals.
      </p>
      <a href="..." className="downloadButton">DOWNLOAD RESUME</a>
      </div>
    </div>
        </Col>
      </Row>
    );
  }
}

export default Resume;