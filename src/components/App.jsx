import React, { useState } from 'react';

import Form from './Form';
import Button from './Button';
import ListDisplay from './ListDisplay'

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
    return names[drawnName].value; 
  }

  return (
    <div>
      <div>
        <Form
          label='Enter name: '
          onSubmit={onFormSubmit}
          inputValue={inputValue}
          setInputValue={setInputValue}
          onChange={e => setInputValue([e.target.value])}
        />
      </div>
      <div>
        <ListDisplay listValue={names}/>
      </div>
      <div>
        <Button btnText='Whos paying?' toDo={() => setWhosPaying(names)}/>
        <Button btnText='Erase names' toDo={() => setNames([])}/>
      </div>
    </div>
  );
}
