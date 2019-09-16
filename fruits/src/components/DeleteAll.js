import React from 'react';

// Delete all button. Calls deleteAll function in index.js
export const DeleteAll = props => {
  return (
    <button className="deleteAll" onClick={props.deleteAll}>
      Delete All
    </button>
  );
};
