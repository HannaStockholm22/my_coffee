import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import returnName from "./returnName.js";
import CoffeeList from "./CoffeeList";

function App(_props) {
  const [counter, setCountrer] = useState(0);
  const [color, setColor] = useState("black");
  const allColor = [
    "red",
    "orange",
    "yellow",
    "green",
    "lightblue",
    "blue",
    "violet"
  ];
  const allColorLength = allColor.length;

  useEffect(
    function doAfterChangeColor() {
      console.log("useEffect worked");
    },
    [color]
  );

  function onButtonPress() {
    setColor(allColor[counter % allColorLength]);
    console.log("Hi", new Date());
    console.log(allColor[counter % allColorLength], counter % allColorLength);
    setCountrer(counter + 1);
  }
  const myStyle = {
    backgroundColor: "beige",
    padding: "5px",
    paddingTop: "7px"
  };

  return (
    <div style={myStyle}>
      <p>{returnName("Hanna")}</p>
      <p>Click on the button and change it's color. </p>
      <p>You have clicked me {counter} times. </p>
      <button style={{ color: [color] }} onClick={onButtonPress}>
        Click Me 
      </button>
      <br />
      
      <CoffeeList/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

