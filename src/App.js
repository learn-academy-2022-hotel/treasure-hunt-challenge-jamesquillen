import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"
import { click } from "@testing-library/user-event/dist/click"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    updateBoard[clickedSquare] = "🌲"
    setBoard(updateBoard)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {board.map((square, index) => {
        return(
          <Square square={square} 
          index={index} 
          handleGamePlay={handleGamePlay} />
          )
        })}
      </div>
    </>
  )
}

export default App
