import { Component } from "react";
import General from "./General";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><h1>CV Builder</h1></header>
        <General />
      </div>
    );
  }
}

export default App;
