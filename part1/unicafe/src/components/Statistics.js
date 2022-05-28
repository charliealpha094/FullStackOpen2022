import React from "react";

const Statistics = ({ good, neutral, bad }) => {
  let All = good + bad + neutral;

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

export default Statistics;
