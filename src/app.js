console.log("App.js is running");

const app = {
  title: "Indecision App",
  subtitle: "this is some info for the subtitle",
  options: ["one", "two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p>"yes options"</p> : <p>"no options"</p>}
  </div>
);

const user = {
  name: "Matt",
  age: 21,
  location: "Oakland"
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
