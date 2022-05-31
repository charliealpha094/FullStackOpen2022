import React from "react";

const Total = (props) => {
  console.log(props);
  let parts = props.parts;
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <div>
      <p>Number of exercises: {total}</p>
    </div>
  );
};

export default Total;
