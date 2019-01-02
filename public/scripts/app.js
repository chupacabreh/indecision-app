"use strict";

console.log("App.js is running");

var app = {
  title: "Indecision App",
  subtitle: "this is some info for the subtitle",
  options: ["one", "two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  app.options.length > 0 ? React.createElement(
    "p",
    null,
    "\"yes options\""
  ) : React.createElement(
    "p",
    null,
    "\"no options\""
  )
);

var user = {
  name: "Matt",
  age: 21,
  location: "Oakland"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
