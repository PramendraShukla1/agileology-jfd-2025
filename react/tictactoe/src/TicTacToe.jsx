import React, { useState } from 'react'
import "./style.css"

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)

    const handleClick = (index) => {
        if(board[index] || calculateWinner(board)) return
    const newBoard = [...board]
    newBoard[index] = isXNext ? "X" : "O"
    setBoard(newBoard)
    setIsXNext(!isXNext)
    }

    const winner = calculateWinner(board)
    const status = winner ? `Winner ${winner}` : board.every((cell) => cell) ? "It's a draw" : `Next Player: ${isXNext ? "X" : "O"}`

    const resetGame = () =>{
        setBoard(Array(9).fill(null))
        setIsXNext(true)
    }


    return (
    <div className='game'>
        <h1>Tic Tac Toe</h1>
        <h3>{status}</h3>

        <div className='board'>
            {board.map((value, i) => (
                <button key={i} className='cell' onClick={()=> handleClick(i)}>
                    {value}
                </button> 
            ))}
        </div>
        <button className='reset' onClick={resetGame}>
            Reset Game
        </button>
    </div>
  )
}

function calculateWinner(board){
const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

for(let line of lines){
    const [a,b,c] = line
    if(board[a] && board[a] === board[b]&& 
        board[a] === board[c]
    ){
        return board[a]
    }
}
return null
}

export default TicTacToe