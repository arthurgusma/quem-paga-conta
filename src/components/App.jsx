import React from 'react';

import Form from './Form';
import Button from './Button';

export default function App() {


  return (
    <div>
      <Form label='Enter name' />
      <Button btnText='Whos paying?' />
      <Button btnText='Erase input' />
    </div>
  );
}
