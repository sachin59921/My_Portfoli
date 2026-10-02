import React from "react";
import "../../pages/style.css";
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <div
      className="hero-role"
      aria-label="Professional roles: Manual Tester, QA Enthusiast, Front End Developer, and Open Source Contributor"
    >
      <Typewriter
        options={{
          strings: [
            "Manual Tester",
            "QA Enthusiast",
            "Front End Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Text;