import "./styles.css";
import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("red");

  const onClickButton = () => {
    const newColor = color === "red" ? "blue" : "red";
    setColor(newColor);
  };
  return (
    <div className="App">
      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          onClickButton();
        }}
      >
        Change
      </button>
    </div>
  );
}
