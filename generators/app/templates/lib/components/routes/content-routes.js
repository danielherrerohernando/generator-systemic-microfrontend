const path = require("path");
const express = require("express");

module.exports = () => {
  const start = async ({ app }) => {
    
    app.get("/", (req, res) =>
      res.sendFile(
        path.resolve(`${__dirname}/../../react-app/public/index_public.html`)
      )
    );

    app.use(
      express.static(path.resolve(`${__dirname}/../../react-app/public`))
    );

    app.get("/bundle", (req, res) =>
      res.sendFile(
        path.resolve(`${__dirname}/../../react-app/export/app.js`)
      )
    );

    

    return Promise.resolve();
  };

  return { start };
};
