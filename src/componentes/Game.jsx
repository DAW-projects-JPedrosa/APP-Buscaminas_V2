import { useSelector } from 'react-redux';
import { selectMines, selectGameOver } from "../Redux/buscaminasSlice";
import Board from './Board/Board';
import GameOver from './Board/GameOver';

function Game(){
    const gameOver = useSelector(selectGameOver);
    const mines = useSelector(selectMines);

    return(
        <div className='game-page'>
            {gameOver? <GameOver /> : <></>}
            <h1>Quedan {mines} minas</h1>
            <div>
                <Board />
            </div>
        </div>
    )
}

export default Game;