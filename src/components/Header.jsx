import React from 'react';

import Button from './Button';

import '../style/Header.css';

export default function Hearder(props) {
  return (
    <nav className='nav-bar'>
      <div className='nav-group'>
        <div className='nav-brand'>
          <a
            href='http://gusmadev.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <b>gusmadev</b>
          </a>
        </div>
        <div>
          <ul>
            <li>
              <Button
                class='btn nav-btn'
                btnText='Como jogar'
                toDo={() => props.onToggleMenu('how to play')}
              />
            </li>
            <li>
              <Button
                class='btn nav-btn'
                btnText='Sobre'
                toDo={() => props.onToggleMenu('about')}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
