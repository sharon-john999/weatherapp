import React from "react";
import Greeting from "./Greeting";
import Weather from "./Weather";
import CreditCardForm from "./CreditCardForm";
import FloatingActionButtons from "./FloatingActionButton";

function App() {
  return (
    <div>
      <div>
      <Weather />
      </div>
      <div>
      <Greeting />
      </div>
      <div>
        <CreditCardForm />
      </div>
      <FloatingActionButtons />
    </div>
  );
}

export default App;
