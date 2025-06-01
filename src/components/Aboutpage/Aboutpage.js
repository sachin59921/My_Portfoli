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
              👋 I'm Sachin Kumar Pal, a detail-driven and enthusiastic QA
              Software Engineer based in Ponda, Goa. I'm currently pursuing my
              Master of Computer Applications (MCA) at Goa University and
              actively seeking entry-level or internship opportunities in
              Software Quality Assurance (QA).
              
              <br> 🛠️ I recently completed a QA
              internship at SJ Innovation Pvt. Ltd., where I gained hands-on
              experience in:</br> 

              <br>Manual testing of web applications Designing and
              executing detailed test cases Bug tracking and reporting using
              Jira Working in Agile teams, participating in daily stand-ups and
              sprint planning Performing regression and functional testing to
              ensure smooth, high-quality releases This experience helped me
              build a solid foundation in QA processes, SDLC, and team
              collaboration</br> 
              
              <br> — and fueled my passion for delivering reliable and
              user-focused products.</br> 
              
              <br>💻 I also bring frontend skills in HTML5,
              CSS3, JavaScript, and React.js, which help me understand user
              interfaces from both a developer and a tester’s perspective <br>

              <br>— making my QA work more insightful and efficient.</br>
              
              <br>📸 Outside of tech, I enjoy photography and exploring new places, which enhance
              my attention to detail and creative thinking.</br> 
              
              <br> 🚀 I’m currently
              open to work and looking for roles such as QA Intern, Junior QA
              Engineer, or Manual Tester, where I can grow under mentorship and
              contribute to high-quality software development.</br> 
              
              <br>📬 Let’s connect!
              Feel free to reach out if you’re hiring, collaborating, or want to
              explore how we can work together.</br>
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
