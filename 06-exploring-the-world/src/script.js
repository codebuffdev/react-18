import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppRoot = () => (
    <div className="root-container">
        <Header/>
        <Body/>
    </div>
);

ReactDOM.createRoot(document.getElementById("root")).render( <AppRoot/>);