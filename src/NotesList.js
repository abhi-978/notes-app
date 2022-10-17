import React from 'react';
import InlineEditNote from './InlineEditNote';
import logo from './read.svg';

const NotesList = (props) => {
  const { notes, setNotes } = props;

  return (
    <div className="col-md-8">
      <h2 className="mb-4">My Notes</h2>
      <div className="container">
        {notes.length > 0 ? (
          notes.map((note) => (
            <InlineEditNote
              key={note.id}
              id={note.id}
              noteText={note.noteText}
              title={note.title}
              notes={notes}
              setNotes={setNotes}
            />
          ))
        ) : (
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className="mt-4 mb-4 fs-5">No notes to display ...</p>
              <img
                src={logo}
                width="300px"
                className=" mt-5 mb-5"
                alt="just_image"
              />
              <p className="fs-3 font-weight-bold">Add your first note </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NotesList;
