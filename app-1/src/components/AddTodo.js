import React, { useState } from "react";

export default function AddTodo(props) {
    const [ input, updateInput ] = useState('');
    
    function handleSubmit(e) {
        e.preventDefault();
        props.addTodo(input)
        updateInput('')

    }

    return (
        <div>
            <form>
                <input onChange={(e) => updateInput(e.target.value)} value={input} type="text"></input>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
