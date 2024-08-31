import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              "I'm Sachin Kumar Pal, a motivated and passionate <b>web developer </b> 
               from Ponda, Goa, currently pursuing my Master of Computer Applications (MCA) at Goa University. With
              strong expertise in <b>HTML5, CSS3, JavaScript, and React.js,</b> I
              specialize in crafting responsive websites that enhance user
              experiences. I recently completed a <b>one-month internship,</b> where I
              gained valuable experience building responsive web applications
              and enhancing user interfaces. I possess strong problem-solving
              skills and have a deep passion for learning new technologies and
              harnessing them for positive transformations.</p>
              <br></br> 
              <p className="aboutdetails"> Beyond coding, I
              enjoy photography and exploring new places. Let's connect and
              create a digital future together!"
              </p>
            
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <li>HTML5/CSS3</li>
                  <li>JavaScript</li>
                  <li>CSS Tailwind</li>
                  <li>Bootsrap 5</li>
                </Col>
                <Col md={5}>
                  <li>React Js</li>
                  <li>Wix</li>
                  <li>Figma</li>
                  <li>Material-ui</li>
                  <li>Git/Github</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
