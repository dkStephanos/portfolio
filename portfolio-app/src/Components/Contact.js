import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../Stylesheets/Contact.css';

class Contact extends Component {
  render() {
    return (
      <Row>
        <Col>
        <div className="contact">
        <div className="content">
        <a className="email" href="mailto:dkstephanos@gmail.com">dkstephanos@gmail.com</a>
        <div className="socialbar">
          <a href="https://www.linkedin.com/in/dkstephanos/" title="Linkedin" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/dkStephanos" title="Github"target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://stephanossolutions.com" title="Tech Blog" target="_blank"><i className="fas fa-universal-access"></i></a>
        </div>
      </div>
      </div>
        </Col>
      </Row>
    );
  }
}

export default Contact;