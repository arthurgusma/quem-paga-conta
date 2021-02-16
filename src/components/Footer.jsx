import React from 'react';

import { FaRegCopyright } from 'react-icons/fa';

import '../style/Footer.css';

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <p>
      {`Powered by ${' '}`}
      <a href='http://gusmadev.com' target='_blank' rel='noopener noreferrer'>
        gusmadev
      </a>{' '}
      <FaRegCopyright /> {year}
    </p>
  );
}
