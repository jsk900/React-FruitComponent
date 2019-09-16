import React from 'react';

// Reset all button. Calls resetAll function in index.js
export const ResetAll = props => {
  return (
    <button className="resetAll" onClick={props.reset}>
      Reset All
    </button>
  );
};
