import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "Heading" },
//   "HelloWorld from REACT!",
// );



// console.log(heading)
// console.log(jsxHeading)


// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an H1 tag 🚀"),
//     React.createElement("h1", {}, "I'm an another H1 tag "),
//   ])
// );
// root.render(parent);
const Title =()=> (
  <h1 id="heading" className="tom" tabIndex="5">
    I am reporting from JSX
  </h1>
);
const heading= (
  <h2>This is all about how to put react element inside react component</h2>
)
const data =1000;
const HeadingComponent2 = () =>(
      <div>
        <Title/>
        <h1>{data}</h1>
        {heading}
        
        <h1 className="funcHead">I am Functional Component</h1>
      </div>
   //Even this is also a functional component
)



const HeadingComponent = () =>{
  return <h1 className="funcHead">I am Functional Component</h1>
}













const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeadingComponent2 />);