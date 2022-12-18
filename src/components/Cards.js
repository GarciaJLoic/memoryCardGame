import "./Cards.css";
const Cards = (props) => {
  const returnCard = (e) => {
    //   const card = document.querySelector;

    e.target.previousSibling.classList.toggle("cardRectoActiv");
    e.target.classList.toggle("cardVersoActiv");
  };
  return (
    <div className="card">
      <div className="cardRecto">
        <img src={props.url} />
      </div>
      <div className="cardVerso" onClick={(e) => returnCard(e)}>
        ?
      </div>
    </div>
  );
};

export default Cards;
