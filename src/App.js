import React from 'react';
import NotesContainer from './NotesContainer';
import 'bootstrap/dist/css/bootstrap.css';

const App = (props) => {
  return (
    <div className="container">
      <h1 className="display-5 mb-4 mt-4">
        <strong>NoteBook</strong>
      </h1>

      <NotesContainer />
    </div>
  );
};

export default App;
