import { useState } from "react";
import BlockCounter from "../components/BlockCounter";
import BlockCards from "../components/BlockCards";
import ButtonGame from "../components/ButtonGame";
import "./Home.css";
const Home = () => {
  const [moveCount, setMoveCount] = useState(0);
  const moveCountSet = (e) => {
    setMoveCount(e);
  };
  return (
    <>
      <ButtonGame text="Start" hide="hide" />
      <div className="gameContainer">
        <BlockCounter move={moveCount} />
        <BlockCards setMove={moveCountSet} move={moveCount} />
        <ButtonGame text="Stop" />
      </div>
    </>
  );
};
export default Home;
