import React from "react";
import { Row, Col } from "react-bootstrap";
import BigTrax from "../images/BigTrax.jpg";

export default function About() {
  return (
<section className="h-[500px] flex items-center bg-white">
  <Row className="w-full items-center">
    <Col sm={12} md={6} className="flex justify-center items-center">
      <img
        src={BigTrax}
        alt="BigTrax"
        className="w-[250px] h-[250px] object-cover rounded-full shadow-lg"
      />
    </Col>

    <Col sm={12} md={6}>
      <section id="about" className=" h-[500px] p-10 bg-gray-100 text-gray-800 rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I’m a passionate software developer with a love for solving real-world problems.
            I specialize in React, Node.js, and creating responsive, clean UI experiences.
          </p>
        </div>
      </section>
    </Col>
  </Row>
</section>

  );
}
