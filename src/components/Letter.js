import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import "../App.css"

function Letter({ letterPos, attemptVal }) {                                                    

  const { board, setDisabledLetters, currAttempt, correctWord } = useContext(AppContext);       
  const letter = board[attemptVal][letterPos];                                                  
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      // console.log(letter);
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  return (
    <div className="flex justify-center items-center h-14 w-14 text-emerald-800 bg-white border-solid border-2 border-emerald-600 rounded-lg text-2xl font-semibold" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
