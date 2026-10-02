import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h1 className='headtext'>
              Hello <span className='wave' aria-hidden="true">👋</span>
            </h1>

            <h2 className='nametext'>I'm Sachin Kumar Pal</h2>

            <span></span>

            <Text />

            <div className="home-cta">
              <a href="/project" className="resumebtn">
                View My Work
              </a>
            </div>

            <div className="social-links" aria-label="Social media links">
              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://github.com/sachin59921",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className='socailmediabtn'
                aria-label="Visit Sachin Kumar Pal on GitHub"
              >
                <AiFillGithub className='icon' aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/sachinkumarpal0103",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className='socailmediabtn'
                aria-label="Visit Sachin Kumar Pal on LinkedIn"
              >
                <FaLinkedinIn className='icon' aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://twitter.com/sachinpal_01",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className='socailmediabtn'
                aria-label="Visit Sachin Kumar Pal on Twitter"
              >
                <AiOutlineTwitter className='icon' aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.open(
                    "https://instagram.com/_shy__boi__unofficial_",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className='socailmediabtn'
                aria-label="Visit Sachin Kumar Pal on Instagram"
              >
                <AiFillInstagram className='icon' aria-hidden="true" />
              </button>
            </div>
          </Col>

          <Col md={5}>
            <div
              className="imagedeveloper"
              role="img"
              aria-label="Developer illustration"
            >
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home