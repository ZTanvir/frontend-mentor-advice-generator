import { useEffect, useState } from "react";
import AdviceCard from "./components/AdviceCard";
import "./App.css";
const url = `https://api.adviceslip.com/advice`;

function App() {
  const [randomAdvice, setRandomAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isGenerateNewAdvice, setIsGenerateNewAdvice] = useState(false);

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
        setIsGenerateNewAdvice(false);
        setLoading(false);
      }
    }
    getAdvice();
  }, [isGenerateNewAdvice]);

  if (error)
    return (
      <main>
        <p>{error}</p>
      </main>
    );

  return (
    <main>
      <AdviceCard
        randomAdvice={randomAdvice}
        loading={loading}
        setLoading={setLoading}
        handleGenerateNewAdvice={setIsGenerateNewAdvice}
      />
    </main>
  );
}

export default App;
