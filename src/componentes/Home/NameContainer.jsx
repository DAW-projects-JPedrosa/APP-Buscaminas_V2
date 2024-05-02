import { useDispatch, useSelector } from 'react-redux';
import { selectPlayerName, setPlayerName } from "../../Redux/buscaminasSlice";

function NameContainer(){
    const dispatch = useDispatch();
    const playerName = useSelector(selectPlayerName);

    const handlePlayerNameChange = (e) => {
        dispatch(setPlayerName(e.target.value));
    }

    return(
        <div className="name-container">
            <input
                type="text"
                className="player-name"
                placeholder="Introduce tu nombre"
                value={playerName}
                onChange={handlePlayerNameChange}
            />
        </div>
    )  
}

export default NameContainer;