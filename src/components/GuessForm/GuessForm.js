import React from 'react';

function GuessForm({ handleSubmitGuesses, gameActive }) {
  const [guessAttempt, setGuessAttempt] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (guessAttempt.length != 5) {
      window.alert(
        `Your word is ${guessAttempt.length} letters long, it needs to be 5`
      );
      return;
    }
    handleSubmitGuesses(guessAttempt);
    setGuessAttempt('');
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>

      <input
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guessAttempt}
        onChange={(event) => {
          setGuessAttempt(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessForm;
