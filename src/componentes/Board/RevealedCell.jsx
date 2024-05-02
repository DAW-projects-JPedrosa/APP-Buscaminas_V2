import Spinner from "../LoadingComponents/Spinner";

function RevealedCell({isLoading, content}){

    return (
        <div className='square'>
            {isLoading?
                <Spinner />
            : content == 'M'?
                    <div className="bomb" alt="exploded mine"></div>
                :
                    <span className={`color-${content}`}>{content}</span>
            }
        </div>
    )
}

export default RevealedCell;