const appRoot = document.getElementById("app");

let visibility = false;

const toggleDetails = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details.</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, appRoot);
};

render();
