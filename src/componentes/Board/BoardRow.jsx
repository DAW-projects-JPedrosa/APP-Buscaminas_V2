import { useSelector } from 'react-redux';
import { selectGameData} from "../../Redux/buscaminasSlice";
import Cell from './Cell';

function BoardRow({id}){
    const gameData = useSelector(selectGameData);
    const columns = gameData.width;

    function createRow(columns){
        const row = [];

        for(let i=0; i<columns; i++){
            row.push(<Cell key={`${id}-${i}`} row={id} column={i}/>)
        }

        return row;
    }

    return(
        <div className="board-row">
            {createRow(columns)}
        </div>
    )
}

export default BoardRow;