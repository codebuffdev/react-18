import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// Top most Parent layout
const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />

      {/*  
      Footer
     */}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);
