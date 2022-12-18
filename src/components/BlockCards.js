import "./BlockCards.css";
import Cards from "./Cards";
const cardList = [
  { name: "bee", url: require("../assets/bee.png") },
  { name: "anaconda", url: require("../assets/anaconda.png") },
  { name: "chameleon", url: require("../assets/chameleon.png") },
  { name: "cockatoo", url: require("../assets/cockatoo.png") },
  { name: "crocodile", url: require("../assets/crocodile.png") },
  { name: "gorilla", url: require("../assets/gorilla.png") },
  { name: "macaw", url: require("../assets/macaw.png") },
  { name: "monkey", url: require("../assets/monkey.png") },
  { name: "bee", url: require("../assets/bee.png") },
  { name: "anaconda", url: require("../assets/anaconda.png") },
  { name: "chameleon", url: require("../assets/chameleon.png") },
  { name: "cockatoo", url: require("../assets/cockatoo.png") },
  { name: "crocodile", url: require("../assets/crocodile.png") },
  { name: "gorilla", url: require("../assets/gorilla.png") },
  { name: "macaw", url: require("../assets/macaw.png") },
  { name: "monkey", url: require("../assets/monkey.png") },
];

const BlockCards = () => {
  return (
    <div id="blockCards">
      {cardList.map((e) => {
        return <Cards url={e.url} />;
      })}
    </div>
  );
};
export default BlockCards;
