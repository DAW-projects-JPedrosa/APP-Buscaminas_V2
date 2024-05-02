import { useDispatch, useSelector } from 'react-redux';
import { selectPlayerName, createGameAsync, selectDifficulty} from "../../Redux/buscaminasSlice";
import {useNavigate} from 'react-router-dom'

function CreateGameButton(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const playerName = useSelector(selectPlayerName);  
    const difficulty = useSelector(selectDifficulty); 

    async function createGame(e){
        e.preventDefault();
        try{
            const response = await dispatch(createGameAsync({playerName, difficulty}));
            navigate(`/game/${response.payload.id}`); 
        }catch(error){
            console.error(error)
        }
    }

    return(
        <button 
            className={`btn btn-primary ${!playerName ? 'disabled' : ''}`} 
            disabled={!playerName}
            onClick={createGame}
        >
            Crear juego 
        </button>
    )
}

export default CreateGameButton;