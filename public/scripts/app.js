"use strict";

console.log("App.js is running");

var app = {
  title: "Indecision App",
  subtitle: "this is some info for the subtitle",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); //stops full page refresh on form submit

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
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
      "Here are your options:"
    ) : React.createElement(
      "p",
      null,
      "no options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        null,
        "Item One"
      ),
      React.createElement(
        "li",
        null,
        "Item Two"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      ),
      React.createElement(
        "button",
        { onClick: removeAll },
        "Clear Options"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
