import React from "react";

import "./App.scss";

const App = () => {
  return (
    <div id="<%= name %>">
      <div className="<%= name %>-app">
        <header className="<%= name %>-app-header">
          <h1>Micro-frontend template</h1>
        </header>
        <div className="<%= name %>-app-body">
          Testing this microfrontend stuff
          <button className="button">Do sth</button>
        </div>
      </div>
    </div>
  );
};

export default App;
