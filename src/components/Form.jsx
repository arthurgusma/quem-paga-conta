import React from 'react';

export default function Form(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit} action=''>
        <label>{props.label}</label>
        <input value={props.inputValue} onChange={props.onChange} type='text' />
      </form>
    </div>
  );
}
