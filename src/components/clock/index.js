import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Clock datediff={9} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
