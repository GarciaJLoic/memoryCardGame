import "./BlockCards.css";
import Cards from "./Cards";
import bee from "../assets/bee.png";
const cardList = [
  { name: "bee", url: "./assets/bee.png" },
  { name: "bee", url: "./assets/bee.png" },
];

const BlockCards = () => {
  return (
    <div id="blockCards">
      {cardList.map((e) => {
        return <Cards url={bee} />;
      })}
    </div>
  );
};
export default BlockCards;
