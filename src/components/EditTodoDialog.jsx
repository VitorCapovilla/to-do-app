import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function EditTodoDialog({open, dialogHandler, todo, editTodo}) {
  const [editedText, setEditedText] = React.useState(todo.text);

  const textHandler = () => {
    editTodo(todo.id, editedText);
    dialogHandler();
  }

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={dialogHandler}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <DialogTitle>{"Editing Task - ID:" + todo.id}</DialogTitle>
      <DialogContent>
      	<TextField defaultValue={editedText} fullWidth onChange={(e) => setEditedText(e.target.value)}/>
      </DialogContent>

      <DialogActions>
        <Button onClick={dialogHandler}>Cancel</Button>
        <Button onClick={textHandler}>Change</Button>
      </DialogActions>
    </Dialog>
  );
}
