import React from "react";

import "./App.css";

const App = () => {
  return (
    <div id="<%= name %>">
      <div className="<%= name %>-app">
        <header className="<%= name %>-app-header">
          <h1>Micro-frontend template</h1>
        </header>
        <div className="<%= name %>-app-body">
          <p>Testing this microfrontend stuff</p>
          <button type="button" onClick={() => {}}>
            Do sth
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
