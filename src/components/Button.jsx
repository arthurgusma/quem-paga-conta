import React from 'react';

import '../style/Button.css';

export default function Button(props) {
      return (
            <button className={props.class} onClick={() => props.toDo()}>{props.btnText}</button>
      )
}