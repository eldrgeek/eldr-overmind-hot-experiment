import React from "react";
import ReactDOM from "react-dom";
import { createOvermind } from "overmind";
import { createHook, Provider } from "overmind-react";
import "./styles.css";
import { useApp, app } from "./overmind";
import App2 from "./App2";
console.log("index reloaded");
function App() {
  const { state, actions } = useApp();

  return (
    <div className="App">
      <h1>{state.count[0] + "x"} tos</h1>
      <button onClick={() => actions.decreaseCount()}>decrease</button>
      <button onClick={() => actions.increaseCount()}>increase</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider value={app}>
    <App />
    <App2 />
  </Provider>,
  rootElement
);
