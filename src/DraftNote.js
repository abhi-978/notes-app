import React from 'react';

const DraftNote = (props) => {
  const { isNew, noteText, setEditedNoteText, title, setEditedTitle } = props;

  return (
    <div>
      {isNew && (
        <span>
          <label htmlFor="name" className="form-label fw-semibold fs-5">
            Title
          </label>
          <br />
        </span>
      )}
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => {
          setEditedTitle(e.target.value);
        }}
        className="form-control"
      />
      <br />
      {isNew && (
        <span>
          <label htmlFor="noteText" className="form-label fw-semibold fs-5">
            Note
          </label>
          <br />
        </span>
      )}
      <textarea
        id="noteText"
        name="noteText"
        value={noteText}
        onChange={(e) => {
          setEditedNoteText(e.target.value);
        }}
        className="form-control"
      ></textarea>
    </div>
  );
};

export default DraftNote;
