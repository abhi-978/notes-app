import React, { useState, useEffect } from 'react';
import NotesList from './NotesList';
import NotesForm from './NotesForm';

const NotesContainer = (props) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (noteData) => {
    const result = [noteData, ...notes];
    setNotes(result);
  };

  return (
    <div className="container">
      <div className="row">
        <NotesList notes={notes} setNotes={setNotes} />
        <NotesForm addNote={addNote} />
      </div>
    </div>
  );
};

export default NotesContainer;
