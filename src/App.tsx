import React from 'react';
import './App.css';
import DemoComponent from "./DemoComponent";
import DemoComponentWithIndustrySyntax from "./DemoComponentWithIndustrySyntax";

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <DemoComponent name = "Minh" />
          <DemoComponentWithIndustrySyntax name={"Son"} />
      </header>
    </div>
  );
}

export default App;

