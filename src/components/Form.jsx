import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';

export default function Form({ addTodo }) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0)

    const todoCreate = (text) => {
        const todoObj = {text: text, id: id};
        setId(id + 1);
        addTodo(todoObj);
        document.getElementById("text-field").value = null;
    }

    return (
        <Paper className='paper'>
            <div className="header">
                <TextField id="text-field" variant="standard" label="Task" onChange={(e) => setText(e.target.value)} fullWidth/>
                <Button variant="outlined" onClick={() => todoCreate(text)}>
                    Add
                </Button>
            </div>
        </Paper>
    );
}