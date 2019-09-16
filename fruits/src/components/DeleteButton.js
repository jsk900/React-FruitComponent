import React from 'react';

// Button Function component accepting props.name from our Fruit component
// and calling a delete fruit function from index.js
export const DeleteButton = props => {
  return (
    <button className="deleteButton" onClick={props.handleClick}>
      {props.name}
    </button>
  );
};
