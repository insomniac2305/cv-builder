import "../styles/App.css";
import General from "./General";
import Education from "./Education";
import Work from "./Work";

function App() {
  return (
    <div className="App">
      <header>
        <h1>CV Builder</h1>
      </header>
      <div className="cv">
        <General />
        <Education />
        <Work />
      </div>
    </div>
  );
}

export default App;
