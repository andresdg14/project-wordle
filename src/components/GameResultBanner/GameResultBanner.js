import React from 'react';

function GameResultBanner({ gameActive, answer, attempts }) {
  if (gameActive === 'win') {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {attempts === 1 ? ' 1 guess' : ` ${attempts} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  } else if (gameActive === 'lose') {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default GameResultBanner;
