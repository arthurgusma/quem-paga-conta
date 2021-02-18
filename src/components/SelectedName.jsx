import React from 'react';

export default function SelectedName(props) {
  return (
    <div className='display-selected '>
      <h3>Parabéns! (Ou não)</h3>
      <h2>{`${props.name} paga a conta dessa vez...`}</h2>
    </div>
  );
}
