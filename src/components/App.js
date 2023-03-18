import { Component } from "react";
import General from "./General";
import "../styles/App.css";
import Education from "./Education";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1>CV Builder</h1></header>
        <General />
        <Education />
      </div>
    );
  }
}

export default App;
