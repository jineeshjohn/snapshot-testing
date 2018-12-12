import React from "react";
import ReactDOM from "react-dom";

import Bar from "./Bar";
import BarFragment from "./BarFragment";
import Foo from "./Foo";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Bar</h3>
      <Bar />
      <h3>BarFragment</h3>
      <BarFragment />
      <h3>Foo</h3>
      <Foo>This is Foo !</Foo>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
