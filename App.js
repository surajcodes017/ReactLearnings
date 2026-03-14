const heading = React.createElement(
  "h1",
  { id: "Heading" },
  "HelloWorld from REACT!",
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h1", {}, "I'm an another H1 tag "),
  ])
); 
root.render(parent);
