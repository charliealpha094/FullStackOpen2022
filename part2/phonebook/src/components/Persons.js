import React from "react";

import Person from "./Person";

const Persons = ({ persons }) => {
  const showPersons = persons.filter((person) => person.name);

  return (
    <div>
      {showPersons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default Persons;
