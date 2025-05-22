import React from "react";
import TypeWriter from "../components/Typewriter.jsx";

const typeWriter = ["Hello!, Sharon Johnson"];

function Greeting() {
  return (
    <div>
      <div className="typewriter-holder">
        <p>
          <TypeWriter data={typeWriter} />
        </p>
      </div>
    </div>
  );
}

export default Greeting;
