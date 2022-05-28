import React from "react";

const Statistics = ({ good, neutral, bad }) => {
  let All = good + bad + neutral;
  if (All === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
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
            <td>{parseFloat(good - bad / All).toFixed(2)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{parseFloat((good / All) * 100).toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
