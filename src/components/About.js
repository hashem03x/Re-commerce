import React from "react";

function About() {
  return (
    <>
      <div className="container text-center p-4">
        <h2 className="text-black-50 fw-bold m-4">About Us</h2>
        <p className="fs-4 text-black">
          Made With <span className="text-black-50 fw-bold">Hashem Ahmed</span>{" "}
          A Front-End Developer.
        </p>
        <ul className="list-unstyled text-sm-start text-md-center">
          <h3 className="text-black-50 text-center">Programming Languages:</h3>
          <li className="m-3">HTML</li>
          <li className="m-3">CSS</li>
          <li className="m-3">bootstrap</li>
          <li className="m-3">React.Js</li>
        </ul>
      </div>
    </>
  );
}

export default About;
