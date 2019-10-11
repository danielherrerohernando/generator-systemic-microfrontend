import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const fragments = () => {
  class MicroFrontend extends HTMLElement {
    log(...args) {
      console.log("<%= name %>-tag", ...args);
    }

    connectedCallback() {
      this.log("connected");
      this.render();
    }

    disconnectedCallback() {
      this.log("disconnected");
    }
  }

  class MfTemplate extends MicroFrontend {
    render() {
      ReactDOM.render(<App />, this);
    }
  }
  window.customElements.define("<%= name %>-tag", MfTemplate);
};

fragments();
