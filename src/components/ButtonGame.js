import "./ButtonGame.css";
const ButtonGame = (props) => {
  return (
    <button onClick={props.onclick} className={`buttonGame ${props.abs}`}>
      {props.text}
    </button>
  );
};

export default ButtonGame;
