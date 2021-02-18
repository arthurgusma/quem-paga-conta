import React, { useState } from 'react';

import Form from './components/Form';
import Button from './components/Button';
import ListDisplay from './components/ListDisplay';
import SelectedName from './components/SelectedName';
import Footer from './components/Footer';
import Header from './components/Header';
import DisplayInfo from './components/DisplayInfo';

import './style/App.css';

export default function App() {
  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loser, setLoser] = useState('');
  const [display, setDisplay] = useState('');

  function toggleMenu(pressedButton) {
    setLoser('');
    setNames([]);
    setDisplay(pressedButton);
  }

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
      <Header onToggleMenu={toggleMenu} />
      {loser === '' && display === '' ? (
        <div className='displayed-content'>
          <Form
            label='Adicionar um nome: '
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
                btnText='Quem paga?'
                toDo={() => setWhosPaying(names)}
              />
              <Button
                class='btn reset-btn'
                btnText='Apagar nomes.'
                toDo={() => setNames([])}
              />
            </div>
          )}
        </div>
      ) : display === '' && loser !== '' ? (
        <div className='displayed-content'>
          <SelectedName name={loser} />
          <Button
            class='btn reset-btn'
            btnText='Iniciar jogo.'
            toDo={() => {
              setLoser('');
              setNames([]);
            }}
          />
        </div>
      ) : loser === '' && display === 'how to play' ? (
        <div className='displayed-content'>
          <DisplayInfo
            title='Como jogar?'
            content='Para jogar o "Quem Paga a Conta?", basta fornecer os nomes dos partitipantes do sorteio para a geração de uma lista. A partir dessa lista, é sorteado um azarado que deve paga a conta da vez.'
          />
          <Button
            class='btn reset-btn'
            btnText='Iniciar jogo.'
            toDo={() => {
              setLoser('');
              setNames([]);
              setDisplay('');
            }}
          />
        </div>
      ) : (
        loser === '' &&
        display === 'about' && (
          <div className='displayed-content'>
            <DisplayInfo
              title='Sobre'
              content='"Quem Paga a Conta" é uma aplicação desenvolvida utilizando React e com o intuito de promover uma descontração na hora de decidir quem vai pagar a conta no final do almoço, jantar ou happy hour.'
            />
            <Button
              class='btn reset-btn'
              btnText='Iniciar jogo.'
              toDo={() => {
                setLoser('');
                setNames([]);
                setDisplay('');
              }}
            />
          </div>
        )
      )}
      <Footer />
    </div>
  );
}
