import React from "react";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  addNewNote(note) {
    this.setState((prevState) => {
      return { notes: [...prevState.notes, note] };
    });
  }

  deleteNote(index) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes.slice(0, index),
          ...prevState.notes.slice(index + 1),
        ],
      };
    });
  }

  addEditedNote(editedNote) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          if (note.id === editedNote.id) {
            return editedNote;
          } else {
            return note;
          }
        }),
      };
    });
    console.log(editedNote);
  }

  render() {
    return (
      <div>
        <NewNote
          onSaveNote={(note) => this.addNewNote(note)}
          edit={false}
          btnText="Add + "
        />
        <br></br>
        <br></br>
        <br></br>
        <NoteList
          notes={this.state.notes}
          onDeleteNote={(index) => this.deleteNote(index)}
          onEditNote={(editedNote) => this.addEditedNote(editedNote)}
        />
      </div>
    );
  }
}

export default App;
