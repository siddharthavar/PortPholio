import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siddhartha Varshney </span>
            from <span className="purple"> Chandausi (Sambhal) , India.</span>
            <br />
            I am a ex SDE intern Harness.io.
            <br />
            I have completed B.tech. in Information Technology at Manipal University Jaipur (Jaipur).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> News Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Siddhartha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
