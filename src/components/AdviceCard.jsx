import lineDividerImg from "../assets/pattern-divider-desktop.svg";
import diceIcon from "../assets/icon-dice.svg";

const AdviceCard = ({ id, advice }) => {
  return (
    <section data-adviceid={id}>
      <p>ADVICE #{id}</p>
      <h3>{advice}</h3>
      <img src={lineDividerImg} alt="" />
      <button>
        <img src={diceIcon} alt="" />
      </button>
    </section>
  );
};
export default AdviceCard;
