import React, { Component } from "react";
import Video1 from "../../media/landscape.mp4";
import Video2 from "../../media/meeting.mp4";
import { Link } from "react-router-dom";
import "./landing.css";

function Landing(props) {
  return (
    <div className="landing">
      <video autoPlay muted loop>
        <source src={Video2} type="video/mp4" />
      </video>
      {/* <div className="titles-container">
        <h1>Perspective</h1>
        <h2>Git your Perspective</h2>
        <button>Login</button>
      </div> */}
      Copy
      <div className="jumbo-container">
        {/* <div className="jumbotron" > */}
        <h1 className="display-4">Perspective</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <Link
          to="/dashboard"
          class="btn btn-primary btn-lg shadow-lg"
          href="#"
          role="button"
        >
          Find Room
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Landing;
