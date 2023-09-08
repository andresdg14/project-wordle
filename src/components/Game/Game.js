import React from 'react';
import GuessForm from '../GuessForm/GuessForm';
import GuessResults from '../GuessResults/GuessResults';
import GameResultBanner from '../GameResultBanner/GameResultBanner';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  // on / win / lose
  const [gameActive, setGameActive] = React.useState('on');

  function handleSubmitGuesses(guessAttempt) {
    const nextGuesses = [...guessList, guessAttempt];
    setGuessList(nextGuesses);

    if (guessAttempt === answer) {
      setGameActive('win');
    } else if (
      guessAttempt !== answer &&
      nextGuesses.length >= NUM_OF_GUESSES_ALLOWED
    ) {
      setGameActive('lose');
    }
  }

  console.log(gameActive);

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessForm
        handleSubmitGuesses={handleSubmitGuesses}
        gameActive={gameActive}
      />
      {gameActive !== 'on' && (
        <GameResultBanner
          answer={answer}
          attempts={guessList.length}
          gameActive={gameActive}
        />
      )}
    </>
  );
}

export default Game;
