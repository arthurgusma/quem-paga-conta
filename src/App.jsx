import React, { useState } from 'react';

import Form from './components/Form';
import Button from './components/Button';
import ListDisplay from './components/ListDisplay';
import SelectedName from './components/SelectedName';
import Footer from './components/Footer';

import './style/App.css';

export default function App() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loser, setLoser] = useState('');

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
    setLoser(names[drawnName].value);
  }

  return (
    <div className='body-app'>
      {loser === '' ? (
        <>
          <Form
            label='Enter name: '
            onSubmit={onFormSubmit}
            inputValue={inputValue}
            setInputValue={setInputValue}
            onChange={(e) => setInputValue([e.target.value])}
          />
          <ListDisplay listValue={names} />
          {names.length > 0 && (
            <div>
              <Button
                class='btn play-btn'
                btnText={`Who's playing?`}
                toDo={() => setWhosPaying(names)}
              />
              <Button
                class='btn reset-btn'
                btnText='Erase names.'
                toDo={() => setNames([])}
              />
            </div>
          )}
        </>
      ) : (
        <>
          <SelectedName name={loser} />
          <Button
            class='btn reset-btn'
            btnText='Reset game.'
            toDo={() => {
              setLoser('');
              setNames([]);
            }}
          />
        </>
      )}
      <Footer />
    </div>
  );
}
