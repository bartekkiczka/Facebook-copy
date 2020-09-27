import React from "react";
import "./App.css";
import Header from "./header/Header.js";
import MainPanel from "./main panel/MainPanel.js";
import LeftPanel from "./left panel/LeftPanel.js";
import RightPanel from "./right panel/RightPanel.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="board">
        <LeftPanel />
        <MainPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
