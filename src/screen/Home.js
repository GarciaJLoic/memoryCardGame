import BlockCounter from "../components/BlockCounter";
import BlockCards from "../components/BlockCards";
import ButtonGame from "../components/ButtonGame";
import "./Home.css";
const Home = () => {
  return (
    <>
      <ButtonGame text="Start" hide="hide" />
      <div className="gameContainer">
        <BlockCounter />
        <BlockCards />
        <ButtonGame text="Stop" />
      </div>
    </>
  );
};
export default Home;
