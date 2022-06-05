import React from "react";

import { useState } from "react";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = { name: newName };
    setNewName("");
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        <PersonForm
          onSubmit={addPerson}
          newName={newName}
          handleNameChange={handleNameChange}
        />
      </div>
      <h2>Numbers</h2>

      <Persons persons={persons} />
    </div>
  );
};

export default App;
