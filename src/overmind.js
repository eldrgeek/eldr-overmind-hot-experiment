import React from "react";
import ReactDOM from "react-dom";
import { createOvermind } from "overmind";
import { createHook, Provider } from "overmind-react";
import "./styles.css";
console.log("overmind reloaded ");

let diff = 10;

window.myincreaseCount = ({ state }, counter = 0) => {
  state.count[counter] += -1;
};
console.log("did this");

export let useApp;
export let app;
const initialize = () => {
  app = createOvermind({
    state: {
      count: [0, 2]
    },
    actions: {
      increaseCount({ state }, counter = 0) {
        window.myincreaseCount({ state }, counter);
      },
      decreaseCount({ state }, counter = 0) {
        state.count[counter]--;
      }
    }
  });

  useApp = createHook();
};

if (module.hot) {
  console.log("hot available");
  module.hot.dispose(data => {
    console.log("disposing");
    data.app = app;
    data.useApp = useApp;
    data.message = "this is a message1";
    // Clean up and pass data to the updated module...
  });
  if (!module.hot.data) {
    initialize();
  } else {
    app = module.hot.data.app;

    useApp = module.hot.data.useApp;
    console.log({ diff });
  }
}
