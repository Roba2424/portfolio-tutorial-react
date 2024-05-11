import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Description from "./components/Description.jsx";
import Buttons from "./components/Buttons.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <Navbar />
      <Description />
      <Buttons />
    </div>
  );
}

export default App;
