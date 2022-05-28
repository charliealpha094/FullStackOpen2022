import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  let All = good + bad + neutral;
  let Average = parseFloat(good - bad / All).toFixed(2);
  let Positive = parseFloat((good / All) * 100).toFixed(2);

  if (All === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="All" value={All} />
          <StatisticLine text="Average" value={Average} />
          <StatisticLine text="Positive" value={Positive} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
