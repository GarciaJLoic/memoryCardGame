import MovesCounter from "./MovesCounter";
import TimeCounter from "./TimeCounter";
import "./BlockCounter.css";
const BlockCounter = () => {
  return (
    <div id="blockCounter">
      <MovesCounter />
      <TimeCounter />
    </div>
  );
};
export default BlockCounter;
