import { useSelector } from 'react-redux';
import { selectLoading } from '../../Redux/buscaminasSlice';
import DifficultyOptions from "./DifficultyOptions";
import NameContainer from "./NameContainer";
import Loading from "../LoadingComponents/Loading";
import CreateGameButton from "./CreateGameButton";

function Home(){
    const isLoading = useSelector(selectLoading);

    return(
        <div id="home">
            {isLoading? <Loading/>: <></>}
            <div className="container">
                <h1>Crea un nuevo juego</h1>
                <NameContainer />
                <form className="create-game">
                    <DifficultyOptions />
                    <CreateGameButton />
                </form>
            </div>
        </div>
    )
}

export default Home;