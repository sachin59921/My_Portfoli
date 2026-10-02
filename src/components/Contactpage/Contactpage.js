import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h1 className="contacthead">Get In Touch</h1>

        <p className="contactpara">
          I’m currently searching for opportunities for a front-end / UI
          developer role.
          <br />
          If there is any vacancy my inbox is always open. Whether
          <br />
          you have any further questions or just want to say hi,
          <br />
          I’ll try my best to get back to you!
        </p>

        <button
          type="button"
          className="contactbtn"
          onClick={() => {
            window.open(
              "https://wa.me/+917841018112",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          aria-label="Say hello on WhatsApp"
        >
          Say Hello
        </button>

        <footer className="copyright">
          <p>© Copyright 2023</p>
          <hr />
          <p>
            Designed &amp; Built by <span>Sachin Pal</span>
          </p>
        </footer>
      </Container>
    </div>
  );
}

export default Contactpage;