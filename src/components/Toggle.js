import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleToggle() {
    setIsOn((isOn) => !isOn)
    // console.log(isOn)
  }
  
  const color = isOn ? "red" : "white"

  return (
    <button style={{ background: color }} onClick={handleToggle}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
