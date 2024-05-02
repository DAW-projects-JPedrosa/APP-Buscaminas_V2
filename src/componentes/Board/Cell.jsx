import { useDispatch, useSelector } from 'react-redux';
import { selectPlayerName, toggleFlag, selectBoard, revealCellAsync} from "../../Redux/buscaminasSlice";
import { useParams } from 'react-router-dom';
import RevealedCell from './RevealedCell';
import UnrevealedCell from './UnrevealedCell';

function Cell({row, column}){
    const dispatch = useDispatch();
    const playerName = useSelector(selectPlayerName);
    const cell = useSelector(selectBoard)[row][column];
    const gameId = useParams().idGame;

    function flag(e){
        e.preventDefault();
        dispatch(toggleFlag({row, column}))
    }

    function reveal(){
        if(!cell.isFlagged){
            try{
                dispatch(revealCellAsync({playerName, gameId, row, column}))
            }catch(error){
                console.error(error);
            }
        }
    }

    return(
        <>
            {cell.isRevealed? 
                <RevealedCell isLoading={cell.isLoading} content={cell.content}/>
            : 
                <UnrevealedCell isFlagged={cell.isFlagged} onClick={reveal} onContextMenu={flag}/>
            }
        </>
    )
}

export default Cell;