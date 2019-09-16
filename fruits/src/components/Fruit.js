import React from 'react';
import { ColourButton } from './ColourButton';
import { DeleteButton } from './DeleteButton';

// Fruit Functional component passing props down to our buttons.
// Including the delete function passed down as props from index.js
// This needs to be passed down to our delete button component.
export const Fruit = props => {
  return (
    <>
      <div className="fruitLine">
        <img src={props.fruit} alt={props.name} />
        <ColourButton name="Change Colour" colour={props.colour} />
        <DeleteButton name="Delete fruit" handleClick={props.handleClick} />
      </div>
    </>
  );
};
