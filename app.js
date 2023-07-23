import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a H8 Tag"),
    React.createElement("h2", {}, "I am a H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a H1 Tag"),
    React.createElement("h2", {}, "I am a H8 Tag"),
  ]),
]);
console.log(heading);

const JsxHeading =()=>  (
  <h1 id="heading" className="jsx" tabIndex={5}>
    React from JSX
  </h1>
)

console.log("jsx", JsxHeading);

const FunctionalComponent = () => (
  <div>
    <JsxHeading/>
    <JsxHeading></JsxHeading>
    {JsxHeading()}
    <h1>{console.log("Learning React.......")}</h1>
    <h1>React Fuctional Coponent..</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);
