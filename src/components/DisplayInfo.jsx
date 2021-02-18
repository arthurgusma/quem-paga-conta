import React from 'react';

export default function DisplayInfo(props) {
  return (
    <div className='display-info'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
