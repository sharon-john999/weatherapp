import React from "react";
import Greeting from "./Greeting";
import Weather from "./Weather";
//import FloatingActionButtons from "./FloatingActionButton";
import FAB from "./FAB";
//import CropCard from "./CropCard";
import CropFetch from "./cropFetch";

function App() {
  return (
    <div>
      <div>
      <Weather/>
      </div>
      <div>
      <Greeting />
      </div>
      <div>
        <FAB />
      </div>
      {/* <CropCard />*/}
      <CropFetch />
    </div>
  );
}

export default App;
