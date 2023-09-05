import React from 'react';
import GuessForm from '../GuessForm/GuessForm';
import Guesses from '../Guesses/Guesses';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleSubmitGuesses(guessAttempt) {
    setGuessList([...guessList, guessAttempt]);
  }

  return (
    <>
      <Guesses guessList={guessList} />
      <GuessForm handleSubmitGuesses={handleSubmitGuesses} />
    </>
  );
}

export default Game;
