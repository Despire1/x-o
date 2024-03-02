import { FieldLayout } from './FieldLayout';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateSquares, updateX, RESET_SQUARES } from '../actions';

export const Field = () => {
    const array = ['', '', '', '', '', '', '', '', ''];
    const dispatch = useDispatch();

    const squares = useSelector((state) => state.squares);
    const xIsNext = useSelector((state) => state.xIsNext);

    const handleClick = (i) => {
        const arrayCopy = squares.slice();

        if (calculateWinner(squares) || arrayCopy[i]) {
            return;
        }

        arrayCopy[i] = xIsNext ? 'X' : 'O';
        dispatch(updateSquares(arrayCopy));
		dispatch(updateX(!xIsNext))
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
        dispatch(RESET_SQUARES)
        dispatch(updateX(true)) // Сбросить игру, чтобы 'X' всегда начинал
    };

    return (
        <>
            <FieldLayout array={array} handleClick={handleClick} squares={squares} />
            <button
                onClick={() => {
                    resetGame();
                }}
                type="button"
            >
                Начать занаво
            </button>
        </>
    );
}
