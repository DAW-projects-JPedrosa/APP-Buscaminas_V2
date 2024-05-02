function UnrevealedCell({isFlagged, onClick, onContextMenu}){

    return (
        <button onClick={onClick} onContextMenu={onContextMenu} className="square">
            {isFlagged &&
                <div className="flag" alt="flag"></div>
            }
        </button>
    )
}

export default UnrevealedCell;