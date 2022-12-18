import "./ButtonGame.css";
const ButtonGame = (props) => {
  return <button className={`buttonGame ${props.hide}`}>{props.text}</button>;
};

export default ButtonGame;
