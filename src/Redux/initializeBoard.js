export default function initializeBoard(rows, columns) {
    const board = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            // Inicializar cada celda
            row.push({
                isFlagged: false,
                isRevealed: false,
                isLoading: false,
                content: null
            });
        }
        board.push(row);
    }
    return board;
}