"use strict";

var appRoot = document.getElementById("app");

var visibility = false;

var toggleDetails = function toggleDetails() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleDetails },
      visibility ? "Hide Details" : "Show Details"
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hey. These are some details."
      )
    )
  );

  ReactDOM.render(jsx, appRoot);
};

render();
