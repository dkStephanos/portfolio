import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../Stylesheets/Projects.css';

class Projects extends Component {
  render() {
    return (
      <Row>
        <Col>

        <section className="projects">
			<div className="content">
				<h2><b>01</b>Projects</h2>
				<h3>My Latest Work. <a href="">See More &gt;</a></h3>
				<div className="gallery">
					<a href="https://stephanos.pagekite.me" className="fantasyPuntAnalyzer" target="_blank"></a>
					<a href="https://github.com/dkStephanos/anti-social-network-client" className="antiSocialNetwork" target="_blank"></a>
					<a href="https://github.com/dkStephanos/albumOrganizer" className="albumOrganizer" target="_blank"></a>
				</div>
			</div>
		</section>
        </Col>
      </Row>
    );
  }
}

export default Projects;