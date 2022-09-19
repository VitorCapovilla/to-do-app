import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTodoDialog from './EditTodoDialog';

export default function TodoItem({todo, deleteTodo, editTodo}) {

    const [openDialog, setOpenDialog] = React.useState(false);

    const dialogHandler = () => {
        setOpenDialog(!openDialog);
    }

  return (
    <>
    <EditTodoDialog editTodo={editTodo} open={openDialog} dialogHandler={dialogHandler} todo={todo}/>
    <List className="list" sx={{bgcolor: 'background.paper' }}>
      {[0].map((value) => {

        return (
          <ListItem
            key={value}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            }

            disablePadding>

            <ListItemButton>
              <ListItemIcon>
                <Checkbox/>
              </ListItemIcon>
              <ListItemText primary={todo.text} onClick={() => setOpenDialog(true)} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </>
  );
}
