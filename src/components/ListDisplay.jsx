import React from 'react';

export default function ListDisplay(props) {
  return (
    <div>
      <ul>
        {props.listValue.map((value) => (
          <li key={value.id}>{value.value}</li>
        ))}
      </ul>
    </div>
  );
}
