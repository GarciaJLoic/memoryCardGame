import BlockCounter from "./BlockCounter";
import BlockCards from "./BlockCards";
import ButtonGame from "./ButtonGame";
import "./GameContainer.css";
const GameContainer = (props) => {
  return (
    <div className={`gameContainer ${props.hide}`}>
      <BlockCounter />
      <BlockCards />
      <ButtonGame text="Stop" />
    </div>
  );
};
export default GameContainer;
