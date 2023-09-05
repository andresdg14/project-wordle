import React from 'react';
import { range } from '../../utils';

function Guess({ value, index }) {
  return (
    <p className="guess" key={index}>
      {range(5).map((num) => (
        <span className="cell" key={num}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
