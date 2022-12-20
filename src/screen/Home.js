import { useState } from "react";
import BlockCounter from "../components/BlockCounter";
import BlockCards from "../components/BlockCards";
import ButtonGame from "../components/ButtonGame";
import "./Home.css";
const Home = () => {
  const [moveCount, setMoveCount] = useState(0);
  const [gameStart, setGameStart] = useState(true);
  const [gameEnd, setGameEnd] = useState(false);
  const gameStartSet = () => {
    setGameStart(!gameStart);
    setMoveCount(0);
  };
  const moveCountSet = (e) => {
    setMoveCount(e);
  };
  const gameEndSet = () => {
    setGameEnd(!gameEnd);
  };
  return (
    <>
      {gameStart && !gameEnd ? (
        <ButtonGame text="Start" onclick={gameStartSet} />
      ) : (
        ""
      )}
      {gameEnd ? (
        <ButtonGame
          abs="abs"
          text="You win ! Play again ?"
          onclick={() => {
            window.location.reload();
          }}
        />
      ) : (
        ""
      )}
      {!gameStart ? (
        <div className="gameContainer">
          <BlockCounter move={moveCount} />
          <BlockCards
            setMove={moveCountSet}
            move={moveCount}
            setEnd={gameEndSet}
            end={gameEnd}
          />
          <ButtonGame text="Stop" onclick={gameStartSet} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Home;
