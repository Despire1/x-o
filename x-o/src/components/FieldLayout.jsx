import styles from './FieldLayout.module.css';

export function FieldLayout({ array, handleClick, squares }) {
	const renderSquare = (i) => {
        return (
            <button className={styles.Item} onClick={() => handleClick(i)}>
                {squares[i]}
            </button>
        );
    };


    return (
        <>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </>
    );
}
