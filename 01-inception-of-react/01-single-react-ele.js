const reactEleH1 = React.createElement("h1",{id: "heading", className: "h-info goodColor" , custom: "value"},"Hello FROM REACT!! ");
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(reactEleH1);


console.log("react h1 ele "+ reactEleH1); // object
console.log("react root "+reactRoot); // object

/*
* console.log(document.getElementById("heading")); // null
* console.log(document.getElementsByClassName("h-info")[0]); // undefined
* Why ?
* plain JS : create → append → exists → query works
* React flow : create React element → schedule render → commit DOM later → THEN exists
* React uses : Concurrent rendering, Asynchronous DOM commit, Batching
* We will learn to use React.useEffect in the future.
* */

// for now setTimeout(callBackFunction(), delayInMilliSeconds);
// 0-delayInMilliSeconds => run after current synchronous code is finishes
setTimeout(()=>{
    console.log(document.getElementById("heading")); // null
    console.log(document.getElementsByClassName("h-info")[0]); // undefined
}, 0);

