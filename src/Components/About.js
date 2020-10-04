import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function About() {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>About EncourageMINT</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <h4>Who we are</h4>
            <p>
              EncourageMINT was built by <a>Ariel Ng</a>, <a>Kristi Nanco</a>,{" "}
              <a>Taihua Rubin</a>, and <a>Emma Seely-Katz</a>. We are a group of
              software engineers who studied full-stack development together and
              wanted to continue working on community-oriented projects as a
              team.
              <br />
              <br />
              We deeply value the creation of networks of care, so when ELC
              announced their 2020 hackathon focus we were eager to build an app
              that would allow people affected by breast cancer to get support
              from their peers.
            </p>
          </Col>
          <Col>
            <h4>Our mission</h4>
            <p>
              The guiding belief behind EncourageMINT is that no one knows what
              kind of support a person might need better than the person
              themself, whether it's commiseration, advice, or just a listening
              ear.
              <br />
              <br />
              EncourageMINT matches users based on what they are looking for and
              where they are in their fight against breast cancer, whether they
              are in treatment, providing care, or in remission.
            </p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer id="gitLink">
        Check out the project repository on <a>GitHub</a>
      </Modal.Footer>
    </div>
  );
}

export default About;
