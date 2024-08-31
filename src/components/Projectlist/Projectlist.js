import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import canteen_hut from "../../Assets/canteen_hut website.png";
import sweetparadise from "../../Assets/sweet paradise.png";
import simplecalculator from "../../Assets/simple calculator.PNG";
import simplecalendar from "../../Assets/simple calender.png";
import Tastify from "../../Assets/Tastify.png";
import Note from "../../Assets/Note&Password.png";
import Portfolio from "../../Assets/Portfolio.png";
import Weatherapp from "../../Assets/weatherapp.png";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Tastify}
                isBlog={false}
                title="Tastify - Restaurant Table Booking System (Web App)"
                description="Tastify is a web app for easy restaurant table booking. Customers can browse restaurants, view menus, check availability, and reserve tables online. It offers a seamless experience for both diners and restaurant owners, making table management efficient and hassle-free."
                ghLink="https://sachin59921.github.io/Tastify-Restaurant/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Note}
                isBlog={false}
                title="Notes and Password Manager (Web App)"
                description="SecretKeeperX is a secure web app for managing notes and passwords. It offers encrypted storage to keep your sensitive information safe and private."
                ghLink="https://secretkeeperx.onrender.com/login"/>
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Portfolio}
                isBlog={false}
                title="Portfolio (Web App)"
                description="A React.js-based portfolio project that presents my work, achievements, and continuous learning in the field of web development."
                ghLink="https://sachinpal-portfolio.netlify.app"
                />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={canteen_hut}
                isBlog={false}
                title="Canteen Hut"
                description="Canteen Hut is a modern website designed for students to order food online. It's built with HTML, CSS, and JavaScript for the frontend, and PHP for the backend. With a user-friendly interface, users can browse the menu, place orders, and pay online securely. It's mobile-responsive and offers a hassle-free ordering experience for students."
                ghLink=" https://sachin59921.github.io/Canteen_hut/"
                />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={sweetparadise}
                isBlog={false}
                title="Sweet Paradise-An Ecommerce store "
                description=" Sweet Paradise is a Wixsite-based ecommerce store that sells a variety of delicious sweets and desserts. The website has a modern design, simple navigation, and convenient features such as a shopping cart and secure checkout. Whether you're in the mood for Mithai, dried fruits and Sweet Paradise has something for everyone. "
                ghLink="https://khankk4916.wixsite.com/sweetparadise2"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Weatherapp}
                isBlog={false}
                title="Weather App"
                description="This is a simple weather application built with React.js that allows users to check the weather forecast for the next five days. It provides real-time weather information based on the user's input city. "
                ghLink="https://weather-forcast-app-2024.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={simplecalculator}
                isBlog={false}
                title="Simple Calculator"
                description="Simple Calculator is a user-friendly Python app for basic arithmetic operations, providing accurate results with keyboard or on-screen input. "
                ghLink="https://github.com/sachin59921/Simple-calculator"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={simplecalendar}
                isBlog={false}
                title="Simple Calendar"
                description="Simple Calendar is a Python app that helps users manage their schedules with an easy-to-use interface, displaying dates, months, and years. Users can add appointments, events, or tasks and set reminders for upcoming events. "
                ghLink="https://github.com/sachin59921/Simple-Calender"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
