import React, { useState } from 'react';

import Form from './components/Form';
import Button from './components/Button';
import ListDisplay from './components/ListDisplay';

export default function App() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function onFormSubmit(event) {
    event.preventDefault();
    setNames([
      ...names,
      {
        id: names.length,
        value: inputValue,
      },
    ]);
    setInputValue('');
  }

  function setWhosPaying(listNames) {
    const totalNames = listNames.length;
    const drawnName = Math.floor(Math.random() * totalNames);
    alert(names[drawnName].value);
  }

  return (
    <div>
      <Form
        label='Enter name: '
        onSubmit={onFormSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onChange={(e) => setInputValue([e.target.value])}
      />

      <ListDisplay listValue={names} />
      <div>
        <Button btnText='Whos paying?' toDo={() => setWhosPaying(names)} />
        <Button btnText='Erase names' toDo={() => setNames([])} />
      </div>
    </div>
  );
}
