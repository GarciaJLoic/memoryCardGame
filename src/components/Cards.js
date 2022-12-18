import "./Cards.css";

let cardReturn = 0;
let card1, card2;
const Cards = (props) => {
  const checkDouble = () => {
    console.log(card1, "--", card2);
    if (card1 === card2) {
      [...document.querySelectorAll(".cardRectoActiv")].map((e) => {
        e.classList.toggle("cardActivDef");
        e.classList.toggle("cardRectoActiv");
      });
    } else {
      [...document.querySelectorAll(".cardRectoActiv")].map((e) => {
        e.classList.toggle("cardRectoActiv");
      });
    }
  };
  const returnCard = (e) => {
    e.target.nextSibling.classList.toggle("cardRectoActiv");
    [...document.querySelectorAll(".cardVerso")].map((e) => {
      e.classList.toggle("disable");
    });
    setTimeout(() => {
      [...document.querySelectorAll(".cardVerso")].map((e) => {
        e.classList.toggle("disable");
      });
    }, 700);
    cardReturn++;
    if (cardReturn === 1) {
      card1 = props.name;
    }
    if (cardReturn === 2) {
      card2 = props.name;
      cardReturn = 0;
      setTimeout(checkDouble, 1000);
    }
  };
  return (
    <div className="card">
      <div className="cardVerso" onClick={(e) => returnCard(e)}>
        ?
      </div>
      <div className="cardRecto">
        <img src={props.url} />
      </div>
    </div>
  );
};

export default Cards;
