import React from 'react';

export default function ListDisplay(props) {
  return (
    <div className='list-display'>
      <ul>
        {props.listValue.map((value) => (
          <li key={value.id}>{value.value}</li>
        ))}
      </ul>
    </div>
  );
}
