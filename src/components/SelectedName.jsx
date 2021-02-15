import React from 'react';

export default function SelectedName(props) {
  return (
    <div>
      <h3>Congrats! (Or not)</h3>
      <h1>{`${props.name} is paying this time!`}</h1>
    </div>
  );
}
