import React from "react";
import TypeWriter from "../components/Typewriter.jsx";

const typeWriter = ["നമസ്കാരം!, ഷാരോൺ ജോൺസൺ"];

function Greeting() {
  return (
    <div className="App">
      <div className="typewriter-holder">
        <p>
          <TypeWriter data={typeWriter} />
        </p>
      </div>
    </div>
  );
}

export default Greeting;
