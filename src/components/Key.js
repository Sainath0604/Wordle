import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {                                                           
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div className="items-center text-emerald-600 bg-emerald-100 hover:text-emerald-800 border border-emerald-600 rounded-lg text-xl font-medium cursor-pointer p-3" id={bigKey ? "big" : disabled && "disabled"} onClick={selectLetter}> {keyVal} </div>
  );
}

export default Key;
