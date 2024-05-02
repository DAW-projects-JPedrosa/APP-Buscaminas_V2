import { useDispatch, useSelector } from 'react-redux';
import { selectDifficulty, setDifficulty } from "../../Redux/buscaminasSlice";
import RadioButton from "./RadioButton";

function DifficultyOptions(){

    const dispatch = useDispatch();
    const difficulty = useSelector(selectDifficulty);

    const handleDifficultyChange = (selectedDifficulty) => {
        dispatch(setDifficulty(selectedDifficulty));
    }

    return(
        <div className="difficulty">
            {['EASY', 'MEDIUM', 'HARD'].map((difficultyOption, index) => (
                <RadioButton
                    key={index}
                    id={index + 1}
                    difficulty={difficultyOption}
                    checked={difficulty === difficultyOption}
                    onChange={handleDifficultyChange}
                />
            ))}
        </div>
    )
}

export default DifficultyOptions;