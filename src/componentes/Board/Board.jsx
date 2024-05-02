import { useSelector } from 'react-redux';
import { selectGameData} from "../../Redux/buscaminasSlice";
import BoardRow from './BoardRow';

function Board(){
    const gameData = useSelector(selectGameData);
    const rows = gameData.height;

    function createBoard(rows){
        const row = [];

        for(let i=0; i<rows; i++){
            row.push(<BoardRow key={i} id={i} />)
        }

        return row;
    }

    return(
        <div className="board">
            {createBoard(rows)}
        </div>
    )
}

export default Board;