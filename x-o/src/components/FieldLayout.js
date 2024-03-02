import styles from './FieldLayout.module.css';
import { useSelector } from 'react-redux';

export function FieldLayout({handleClick }) {
    const squares = useSelector((state) => state.squares);

    const renderSquare = (i) => {
        return (
            <button className={styles.Item} onClick={() => handleClick(i)}>
                {squares[i]}
            </button>
        );
    };

    return (
        <>
            <div className={styles.board_row}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className={styles.board_row}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className={styles.board_row}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </>
    );
}
