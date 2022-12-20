import { useState, useEffect } from "react";
import "./BlockCounter.css";
const BlockCounter = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="blockCounter">
      <p id="movesCounter">Moves: {props.move}</p>
      <p id="timeCounter">
        Times: {Math.floor(count / 60) < 10 ? " 0" : " "}
        {Math.floor(count / 60)} : {count % 60 < 10 ? "0" : ""}
        {count % 60}
      </p>
    </div>
  );
};
export default BlockCounter;
