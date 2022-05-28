import { useState } from "react";

import Button from "./components/Button";

const App = () => {
  // save clicks of each button to each own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodRating = () => {
    setGood(good + 1);
    console.log(good);
  };

  const setNeutralRating = () => {
    setNeutral(neutral + 1);
  };

  const setBadRating = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={setGoodRating} text="Good" />
      <Button onClick={setNeutralRating} text="Neutral" />
      <Button onClick={setBadRating} text="Bad" />
    </div>
  );
};

export default App;
