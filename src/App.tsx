import React from 'react';
import './App.css';
import DemoComponent from "./DemoComponent";
import DemoComponentWithIndustrySyntax from "./DemoComponentWithIndustrySyntax";
import Header from "./component/Header";
import Body from "./component/Body";

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <DemoComponent name = "Minh" />
          <DemoComponentWithIndustrySyntax name={"Son"} />
          <Header />
          <Body />

      </header>
    </div>
  );
}

export default App;

