import "./Cards.css";
const Cards = (props) => {
  const returnCard = (e) => {
    //   const card = document.querySelector;
    e.target.nextSibling.classList.toggle("cardRectoActiv");
    e.target.classList.toggle("cardVersoActiv");
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
