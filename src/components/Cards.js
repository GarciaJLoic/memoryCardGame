import "./Cards.css";

let cardReturn = 0;
let cardValid = 0;
let card1, card2;

const Cards = (props) => {
  const classToggle = (classOrigin, toggleClass) => {
    [...document.querySelectorAll(classOrigin)].map((e) => {
      return e.classList.toggle(toggleClass);
    });
  };
  const checkDouble = () => {
    if (card1 === card2) {
      classToggle(".cardRectoActiv", "cardActivDef");
      classToggle(".cardRectoActiv", "cardRectoActiv");

      cardValid += 2;
      if (cardValid === 2) {
        props.setEnd();
        cardValid = 0;
      }
    } else {
      classToggle(".cardRectoActiv", "cardRectoActiv");
    }
  };

  const returnCard = (e) => {
    e.target.nextSibling.classList.toggle("cardRectoActiv");
    classToggle(".cardVerso", "disable");
    setTimeout(() => {
      classToggle(".cardVerso", "disable");
    }, 700);
    cardReturn++;
    if (cardReturn === 1) {
      card1 = props.name;
    }
    if (cardReturn === 2) {
      card2 = props.name;
      cardReturn = 0;
      props.setMove((count) => props.move + 1);
      setTimeout(checkDouble, 1000);
    }
  };
  return (
    <div className="card">
      <div className="cardVerso" onClick={(e) => returnCard(e)}>
        ?
      </div>
      <div className="cardRecto">
        <img src={props.url} alt={props.name} />
      </div>
    </div>
  );
};

export default Cards;
