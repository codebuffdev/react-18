/**
 * <div id = "parent">
 *     <div id = "child>
 *         <h1>
 *             <span>Hello Nasty Nested</span>
 *         </h1>
 *     </div>
 *</div>
 **/

const reactEleSpan = React.createElement("span",{id: "span"}, "Hello Nasty Nested")
const reactEleH1 = React.createElement("h1", {id: "heading"}, reactEleSpan);
const reactEleChildDiv = React.createElement("div",{id: "child"}, reactEleH1);
const reactEleParentDiv = React.createElement("div",{id: "parent"}, reactEleChildDiv);

let reactDomRootDiv = ReactDOM.createRoot(document.getElementById("nested-root"));

reactDomRootDiv.render(reactEleParentDiv);









