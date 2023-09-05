import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, index, answer }) {
  const checkClass = checkGuess(value, answer);

  return (
    <p className="guess" key={index}>
      {range(5).map((num) => (
        <span
          className={
            'cell ' + (checkClass ? checkClass[num].status : undefined)
          }
          key={num}
        >
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
