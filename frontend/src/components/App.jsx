import Greeting from "./Greeting";
import Weather from "./Weather";
import FAB from "./FAB";
import CropFetch from "./cropFetch";
import GeminiChat from "./GeminiChat";

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
      <h3 className="crop-portfolio">Your Crop Portfolio</h3>
      <CropFetch />
      <GeminiChat />
    </div>

  );
}

export default App;
