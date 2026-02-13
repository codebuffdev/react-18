/**
 * <div id = "parent">
 *     <div id = "child1>
 *         <h1>
 *             <span>Hello Nasty Nested</span>
 *         </h1><h1>
 *             Hello
 *         </h1>
 *     </div>
 *     <div id = "child2>
 *         <h1>
 *             <span>Hello Nasty Nested</span>
 *         </h1><h1>
 *             Hello
 *         </h1>
 *     </div>
 *</div>
 **/

const spanREle = React.createElement("span",{},"Hello Nasty Nested");
const h1PSpanREle = React.createElement("h1",{},spanREle);
const h1REleText =  React.createElement("h1",{},"Hello");
const child1Div = React.createElement("div",{id: "child1"},[h1PSpanREle,h1REleText]);
const child2Div = React.createElement("div",{id: "child2"},[h1PSpanREle,h1REleText]);
const rootDivRele = React.createElement("div",{id: "parent"},[child1Div, child2Div])

ReactDOM.createRoot(document.getElementById("nested-root")).render(rootDivRele);