import React from 'react';

import '../style/Header.css';

export default function Hearder() {
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
            <a href='/'>Como Jogar</a>
          </li>
          <li>
            <a href='/'>Sobre</a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
