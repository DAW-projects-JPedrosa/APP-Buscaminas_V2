function RadioButton({id, checked, difficulty, onChange}){
    const radioId = `radio${id}`;

    const difficultyText = {
        'EASY': 'Principiante',
        'MEDIUM': 'Intermedio',
        'HARD': 'Experto'
    }[difficulty] || '';

    return(
        <div className="custom-radio">
            <input 
                type="radio" 
                name="difficulty" 
                id={radioId} 
                value={difficulty} 
                checked={checked}
                onChange={() => onChange(difficulty)} 
            />
            <label htmlFor={radioId}>{difficultyText}</label>
        </div>
    )
}

export default RadioButton;