import React, { useState } from 'react';

export default function Form(props) {
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

  console.log(names);

  return (
    <div>
      <form onSubmit={onFormSubmit} className='inputName' action=''>
        <div>
          <label>{props.label}</label>
          <input
            value={inputValue}
            onChange={(e) => setInputValue([e.target.value])}
            type='text'
          />
        </div>
      </form>
      <div>
        <ul>
          {names.map((name) => (
            <li key={name.id}>{name.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
