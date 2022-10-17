import React, { useState } from 'react';
import DraftNote from './DraftNote';

const InlineEditNote = (props) => {
  const { id, noteText, title, notes, setNotes } = props;
  const [changedNoteText, setChangedNotetext] = useState(noteText);
  const [changedTitle, setChangedTitle] = useState(title);
  const [editable, setEditable] = useState(false);

  const handleDelete = (id) => {
    const confirm = window.confirm('Are you sure about removing this ?');
    if (confirm) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
    }
  };

  const handleSave = () => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        const result = {
          id: note.id,
          noteText: changedNoteText,
          title: changedTitle,
        };
        return { ...result };
      }
      return { ...note };
    });
    setNotes(updatedNotes);
    setEditable(false);
  };

  return (
    <div className="card p-3 mb-4 p-2  border-info">
      {editable ? (
        <div className="container">
          <DraftNote
            isNew={false}
            noteText={changedNoteText}
            setEditedNoteText={setChangedNotetext}
            title={changedTitle}
            setEditedTitle={setChangedTitle}
          />
        </div>
      ) : (
        <div className="container">
          <p className="text-start ms-2">
            <strong>{title}</strong>
          </p>
          <p className="text-start ms-2 fs-5">{noteText}</p>
        </div>
      )}
      <br />
      <div className="d-flex justify-content-end">
        {!editable ? (
          <button
            onClick={() => {
              setEditable(true);
            }}
            className="btn btn-outline-info me-2 ms-2"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="btn btn-outline-success me-2 ms-2"
          >
            Save
          </button>
        )}
        <button
          onClick={(e) => {
            handleDelete(id);
          }}
          className="btn btn-outline-danger me-2 ms-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default InlineEditNote;
