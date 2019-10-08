import React from "react";
import { useApp, app } from "./overmind";
import { createHook, Provider } from "overmind-react";

console.log("app2 reloaed");
function App2() {
  const { state, actions } = useApp();

  return (
    // <Provider value={app}>
    <div className="App">
      <h1>{state.count[1] + "r"} tos</h1>
      <button onClick={() => actions.decreaseCount(1)}>decrease</button>
      <button onClick={() => actions.increaseCount(1)}>increase</button>
    </div>
    // </Provider>
  );
}
export default App2;
