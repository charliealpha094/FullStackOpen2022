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

  const All = good + bad + neutral;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={setGoodRating} text="Good" />
      <Button onClick={setNeutralRating} text="Neutral" />
      <Button onClick={setBadRating} text="Bad" />
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{All}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{good - bad / All}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{(good / All) * 100}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
