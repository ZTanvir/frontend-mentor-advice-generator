import lineDividerImg from "../assets/pattern-divider-desktop.svg";
import diceIcon from "../assets/icon-dice.svg";

const AdviceCard = ({ id, advice, handleGenerateNewAdvice }) => {
  return (
    <section
      data-center="center-text"
      data-stack
      className="adviceCard"
      data-adviceid={id}
    >
      <p className="adviceId">ADVICE #{id}</p>
      <h3 className="advice">“{advice}”</h3>
      <img className="adviceLineImg" src={lineDividerImg} alt="" />
      <button
        className="adviceBtn"
        onClick={() => handleGenerateNewAdvice(true)}
      >
        <img data-center src={diceIcon} alt="" />
      </button>
    </section>
  );
};
export default AdviceCard;
