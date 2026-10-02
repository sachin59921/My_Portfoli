import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h1 className="aboutmetext">
              About <span>Me</span>
            </h1>

            <div className="aboutdetails">
              <p>
                👋 I'm Sachin Kumar Pal, a detail-driven and enthusiastic QA
                Software Engineer based in Ponda, Goa. I'm currently pursuing
                my Master of Computer Applications (MCA) at Goa University and
                actively seeking entry-level or internship opportunities in
                Software Quality Assurance (QA).
              </p>

              <p>
                🛠️ I recently completed a QA internship at SJ Innovation Pvt.
                Ltd., where I gained hands-on experience in:
              </p>

              <ul>
                <li>Manual testing of web applications</li>
                <li>Designing and executing detailed test cases</li>
                <li>Bug tracking and reporting using Jira</li>
                <li>
                  Working in Agile teams, participating in daily stand-ups and
                  sprint planning
                </li>
                <li>
                  Performing regression and functional testing to ensure
                  smooth, high-quality releases
                </li>
              </ul>

              <p>
                This experience helped me build a solid foundation in QA
                processes, SDLC, and team collaboration — and fueled my passion
                for delivering reliable and user-focused products.
              </p>

              <p>
                💻 I also bring frontend skills in HTML5, CSS3, JavaScript, and
                React.js, which help me understand user interfaces from both a
                developer and a tester’s perspective — making my QA work more
                insightful and efficient.
              </p>

              <p>
                📸 Outside of tech, I enjoy photography and exploring new
                places, which enhance my attention to detail and creative
                thinking.
              </p>

              <p>
                🚀 I’m currently open to work and looking for roles such as QA
                Intern, Junior QA Engineer, or Manual Tester, where I can grow
                under mentorship and contribute to high-quality software
                development.
              </p>

              <p>
                📬 Let’s connect! Feel free to reach out if you’re hiring,
                collaborating, or want to explore how we can work together.
              </p>
            </div>

            <section aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="skilllist">
                Skills
              </h2>

              <Row className="skills-row">
                <Col md={7}>
                  <ul className="skilllist">
                    <li>HTML5/CSS3</li>
                    <li>JavaScript</li>
                    <li>CSS Tailwind</li>
                    <li>Bootsrap 5</li>
                    <li>Manual Testing</li>
                    <li>Test Case Design &amp; Execution</li>
                    <li>Analytical Thinking, Attention to Detail</li>
                  </ul>
                </Col>

                <Col md={5}>
                  <ul className="skilllist">
                    <li>React Js</li>
                    <li>Wix</li>
                    <li>Figma</li>
                    <li>Material-ui</li>
                    <li>Git/Github</li>
                    <li>Bug Tracking &amp; Reporting</li>
                    <li>Agile Methodology &amp; SDLC Understanding</li>
                    <li>
                      Effective Communication &amp; Team Collaboration
                    </li>
                  </ul>
                </Col>
              </Row>
            </section>
          </Col>

          <Col md={5}>
            <div
              className="webimage"
              role="img"
              aria-label="Web development illustration"
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;