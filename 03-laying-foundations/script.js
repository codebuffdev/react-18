import React from "react";
import ReactDOM from "react-dom/client";

// React Elements using React.createElement() method.
// React Elements are the building blocks of React applications. They are plain JavaScript objects that represent a part of the user interface.

const hREle = React.createElement(
  "h1",
  { className: "heading" },
  "Hello, React!",
);

// Creating React elements using core react method is not developer friendly
// code is for human 1st then for machine

// ReactDOM.createRoot(document.getElementById("root")).render(hREle);

// Solution is JSX
// JSX - JavaScript XML
// JSX is a syntax extension for JavaScript that looks similar to HTML. It allows us to write HTML-like code within our JavaScript files, which React can then transform into React elements.

const jsxHeading = (
  <h1 id="head" className="head-info">
    Hello, React with JSX!
  </h1>
); // wrap jsx code in parentheses if we write in multiple lines

console.log(hREle);
console.log(jsxHeading);

// JSX is not natively understood by browsers, so it needs to be transpiled into regular JavaScript using tools like Babel. When we write JSX, it gets transformed into React.createElement() calls under the hood.

//ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

// Everything in React is a component, and components are reusable pieces of code. 2 types of components - Functional and Class components (outdated).

// Functional components are JavaScript functions that return JSX & should start with a capital letter.

// Heading component
//both are valid
function Heading() {
  return (
    <h1 id="head" className="head-info">
      Hello, React Functional Component!
    </h1>
  );
}

const Heading2 = () => (
  <h1 id="head" className="head-info">
    Hello, React Functional Component 2!
  </h1>
);

// ReactElement is -> jsx or React.createElement()
// ReactComponent is -> function or class that returns jsx/ReactElement

//Element rendering
//ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

//component rendering (all valid)
// ReactDOM.createRoot(document.getElementById("root")).render(Heading2());
// ReactDOM.createRoot(document.getElementById("root")).render(Heading());

// most recommended way
// ReactDOM.createRoot(document.getElementById("root")).render(<Heading />);
// ReactDOM.createRoot(document.getElementById("root")).render(<Heading2 />);

// Component Composition : Composing components together

const Title = () => <h1>Title Component</h1>;
const Span = () => <span>Span Component</span>;

const Container = () => (
  <div>
    <Title />
    <Span />
  </div>
);

// ReactDOM.createRoot(document.getElementById("root")).render(<Container />);

// Js inside JSX -> {inside this}
const name = "John Doe";
const JsxWithJs = () => (
  <div>
    <h1>Hello, {name}!</h1>
    <p>Welcome to React with JSX.</p>
  </div>
);

// ReactDOM.createRoot(document.getElementById("root")).render(<JsxWithJs />);

// React element inside JSX
// js var with react element
const reactEleP = React.createElement(
  "p",
  null,
  "This is a React element inside JSX.",
);

// js var with jsx element
const JsxWithReactEle = <h4>Hello Jsx Element</h4>;

// lets have both these inside react component
const ComponentJsxWithReactEleAndJs = () => (
  <div>
    {JsxWithReactEle}
    {reactEleP}
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ComponentJsxWithReactEleAndJs />,
);
