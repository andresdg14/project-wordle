import React from 'react';

function GuessForm() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length != 5) {
      window.alert(
        `Your word is ${guess.length} letters long, it needs to be 5`
      );
    } else {
      console.info({ guess });
      setGuess('');
    }
  }
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessForm;
