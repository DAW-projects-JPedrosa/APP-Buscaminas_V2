import {Link} from 'react-router-dom'

function GameOver(){

    return(
        <div className="game-over">
            <h1>Has perdido</h1>
            <Link className="button" to="/">Jugar otra vez</Link>
        </div>
    )
}

export default GameOver