import lineDividerImg from "../assets/pattern-divider-desktop.svg";
import diceIcon from "../assets/icon-dice.svg";
import Loading from "./Loading";

const AdviceCard = ({
  randomAdvice,
  loading,
  setLoading,
  handleGenerateNewAdvice,
}) => {
  return (
    <section
      data-center="center-text"
      data-stack
      className="adviceCard"
      data-adviceid={loading === true ? "" : randomAdvice.id}
    >
      {loading === true ? (
        <div data-center>
          <Loading />
        </div>
      ) : (
        <div>
          <p className="adviceId">ADVICE #{randomAdvice.id}</p>
          <h3 className="advice">“{randomAdvice.advice}”</h3>
          <img className="adviceLineImg" src={lineDividerImg} alt="" />
          <button
            className="adviceBtn"
            onClick={() => {
              handleGenerateNewAdvice(true);
              setLoading(true);
            }}
          >
            <img data-center src={diceIcon} alt="" />
          </button>
        </div>
      )}
    </section>
  );
};
export default AdviceCard;
