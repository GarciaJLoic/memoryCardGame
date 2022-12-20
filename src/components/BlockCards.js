import Cards from "./Cards";
import "./BlockCards.css";
const cardList = [
  { name: "bee", url: require("../assets/bee.png") },
  { name: "anaconda", url: require("../assets/anaconda.png") },
  { name: "chameleon", url: require("../assets/chameleon.png") },
  { name: "cockatoo", url: require("../assets/cockatoo.png") },
  { name: "crocodile", url: require("../assets/crocodile.png") },
  { name: "gorilla", url: require("../assets/gorilla.png") },
  { name: "macaw", url: require("../assets/macaw.png") },
  { name: "monkey", url: require("../assets/monkey.png") },
  { name: "piranha", url: require("../assets/piranha.png") },
  { name: "sloth", url: require("../assets/sloth.png") },
  { name: "tiger", url: require("../assets/tiger.png") },
  { name: "toucan", url: require("../assets/toucan.png") },
];

const cardListGenerate = () => {
  return cardList.sort(() => Math.random() - 0.5).splice(0, 8);
}; // Créer un nouveau tableau en mélangeant l'ordre des éléments grâce à Math.random() -0.5 , puis ne garde que les 8 premiers élémen grâce à splice
let cardListTemp = cardListGenerate();
const newCardListGenerate = () =>
  cardListTemp
    .concat(cardListTemp) // assemble le tableau 2 fois pour que chaque carte soit doublée
    .sort(() => Math.random() - 0.5); // mélange l'ordre des cartes
let newCardList = newCardListGenerate();
const BlockCards = (props) => {
  return (
    <div id="blockCards">
      {newCardList.map((e, index) => {
        return (
          <Cards
            setMove={props.setMove}
            move={props.move}
            key={index}
            name={e.name}
            url={e.url}
            setEnd={props.setEnd}
            end={props.end}
          />
        );
      })}
    </div>
  );
};
export default BlockCards;
