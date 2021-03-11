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

  render() {
    console.log(this.state.notes);
    return (
      <div>
        <NewNote onSaveNote={(note) => this.addNewNote(note)} />
        <NoteList
          notes={this.state.notes}
          onDeleteNote={(index) => this.deleteNote(index)}
        />
      </div>
    );
  }
}

export default App;
