import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DraftNote from './DraftNote';

const NotesForm = (props) => {
  const [title, setTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const { addNote } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setNoteText('');
    setTitle('');
    if (noteText !== '' && title !== '') {
      const noteData = {
        id: uuidv4(),
        noteText: e.target.noteText.value,
        title: e.target.title.value,
      };

      addNote(noteData);
    }
  };

  return (
    <div className=" col-md-4 ">
      <h3 className="mb-4">Add Note</h3>
      <div className="container font-monospace">
        <form onSubmit={handleSubmit}>
          <br />
          <DraftNote
            isNew={true}
            noteText={noteText}
            setEditedNoteText={setNoteText}
            title={title}
            setEditedTitle={setTitle}
          />
          <br />
          <br />
          <input type="submit" value="Save" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default NotesForm;
