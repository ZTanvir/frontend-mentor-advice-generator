import { useEffect, useState } from "react";
import AdviceCard from "./components/AdviceCard";

const url = `https://api.adviceslip.com/advice`;

function App() {
  const [randomAdvice, setRandomAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAdvice() {
      try {
        const response = await fetch(url);
        if (response.status >= 400) {
          throw new Error("Api response error");
        }
        const data = await response.json();
        setRandomAdvice(data.slip);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getAdvice();
  }, []);

  if (loading) return <h1>Loading..</h1>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {randomAdvice && (
        <AdviceCard id={randomAdvice.id} advice={randomAdvice.advice} />
      )}
    </>
  );
}

export default App;
