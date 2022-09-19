import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import { Container, List } from '@mui/material';
import { useState } from 'react';

export default function Home() {
    const [all, setAll] = useState ([]);

    const addTodo = (todo) => {
        setAll([...all, todo]);
    };

    const deleteTodo = (id) => {
        var filtered = all.filter((todo) => todo.id !== id);
        setAll(filtered);
    }

    const editTodo = (id, editedText) => {
      var allTodosArray = [...all];

      for(var i in allTodosArray){
        if(allTodosArray[i].id === id){
          allTodosArray[i].text = editedText;
        }
      }
      setAll(allTodosArray);
    }

  return (
    <Container maxWidth="sm" className='container'>
      <Form addTodo={addTodo}/>
      <List >
        {all.map((todo) => (
            <div key={todo.id}>
                <TodoItem editTodo={editTodo} todo={ todo } deleteTodo={deleteTodo}/>
            </div>
        ))}
      </List>
    </Container>
  );
}
