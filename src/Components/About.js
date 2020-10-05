import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function About() {
  return (
    <div id="about">
      <Modal.Header closeButton>
        <Modal.Title>About EncourageMINT</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <h4>Who we are</h4>
            <p>
              EncourageMINT was built by{" "}
              <a href="https://www.linkedin.com/in/arielng/ " target="_blank">
                Ariel Ng
              </a>
              ,{" "}
              <a href="https://www.linkedin.com/in/knanco/ " target="_blank">
                Kristi Nanco
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/taihuarubin/ "
                target="_blank"
              >
                Taihua Rubin
              </a>
              , and{" "}
              <a href="https://www.linkedin.com/in/emmask/ " target="_blank">
                Emma Seely-Katz
              </a>
              . We are a group of software engineers who studied full-stack
              development together and wanted to continue working on
              community-oriented projects as a team.
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
        Check out the project repository on{" "}
        <a
          href="https://github.com/tech-support-ELC/EncourageMINT"
          target="_blank"
        >
          GitHub
        </a>
        !
      </Modal.Footer>
    </div>
  );
}

export default About;
