import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={`${props.title} project preview`}
      />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Button
          type="button"
          className="viewbtn"
          variant="primary"
          href={props.ghLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${props.title} project on GitHub`}
        >
          View
        </Button>

        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            type="button"
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "10px" }}
            aria-label={`View live demo of ${props.title}`}
          >
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;