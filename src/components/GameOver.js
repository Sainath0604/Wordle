import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="mt-12 font-serif text-xl text-center">
      <h3>
        {gameOver.guessedWord? "You Correctly Guessed the Wordle!!" : "You Failed to Guess the Word!!"}
      </h3>
      <h1>Correct Word: <a className="text-slate-800 underline decoration-emerald-800 font-sans text-xl uppercase font-semibold" href="/#">{correctWord}</a></h1>
      {gameOver.guessedWord && (
        <h3>You guessed in <a className="text-slate-800 underline decoration-emerald-800 font-sans text-xl font-semibold" href="/#">{currAttempt.attempt}</a> attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
