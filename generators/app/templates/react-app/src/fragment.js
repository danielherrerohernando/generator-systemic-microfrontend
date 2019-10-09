import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

(function fragments() {
  class MicroFrontend extends HTMLElement {
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
})();
