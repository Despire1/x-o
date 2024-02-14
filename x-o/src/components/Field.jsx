import { useState } from 'react';
import { FieldLayout } from './FieldLayout';

export function Field() {
    const array = ['', '', '', '', '', '', '', '', ''];

    const [squares, setSquares] = useState(array);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const arrayCopy = squares.slice();

        if (calculateWinner(squares) || arrayCopy[i]) {
            return;
        }

        arrayCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(arrayCopy);
        setXIsNext(!xIsNext);
    };

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return '';
    }

    const resetGame = () => {
        setSquares(array);
        setXIsNext(true); // Сбросить игру, чтобы 'X' всегда начинал
    };

    return (
        <>
            <FieldLayout array={array} handleClick={handleClick} squares={squares} />
			<button onClick={() => {resetGame()}}>Начать занаво</button>
        </>
    );
}
