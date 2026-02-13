/**
 * <div id = "parent">
 *     <div id = "child>
 *         <h1>
 *             <span>Hello Nasty Nested</span>
 *         </h1><h1>
 *             Hello
 *         </h1>
 *     </div>
 *</div>
 **/

const reactEleSpan = React.createElement("span",{id: "span"}, "Hello Nasty Nested")
const reactEleH1S1 = React.createElement("h1", {id: "heading"}, reactEleSpan);
const reactEleH1S2 = React.createElement("h1", {id: "heading"}, "Hello");
// React.createElement("TagName",{attributesObj},array);
const reactEleChildDiv = React.createElement("div",{id: "child"}, [reactEleH1S1, reactEleH1S2]); // pass an array
const reactEleParentDiv = React.createElement("div",{id: "parent"}, reactEleChildDiv);

let reactDomRootDiv = ReactDOM.createRoot(document.getElementById("nested-root"));

reactDomRootDiv.render(reactEleParentDiv);
