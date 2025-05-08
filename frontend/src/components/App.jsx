import React from "react";
import Greeting from "./Greeting";
import Weather from "./Weather";
import CardForm from "./CardForm";
import FloatingActionButtons from "./FloatingActionButton";
import FAB from "./FAB";

function App() {
  return (
    <div>
      <div>
      <Weather bg='public/images/summer.mp4'/>
      </div>
      <div>
      <Greeting />
      </div>
      <div>
        <FAB />
      </div>
    </div>
  );
}

export default App;
