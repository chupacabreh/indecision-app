console.log("App.js is running");

const app = {
  title: "Indecision App",
  subtitle: "this is some info for the subtitle",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault(); //stops full page refresh on form submit

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const removeAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? (
        <p>Here are your options:</p>
      ) : (
        <p>no options</p>
      )}
      <p>{app.options.length}</p>

      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
        <button onClick={removeAll}>Remove All</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
