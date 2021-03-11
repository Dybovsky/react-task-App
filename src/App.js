import React from "react";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";
import NewModal from "./components/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      show: false,
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

  openModal() {
    this.setState({ notes: this.state.notes, isOpen: true });
  }

  closeModal() {
    this.setState({ notes: this.state.notes, isOpen: false });
  }

  render() {
    return (
      <div>
        <NewNote onSaveNote={(note) => this.addNewNote(note)} />
        <NoteList
          notes={this.state.notes}
          onDeleteNote={(index) => this.deleteNote(index)}
          openModal={() => {
            this.openModal();
          }}
        />
        <NewModal
          show={this.state.isOpen}
          closeModal={() => {
            this.closeModal();
          }}
        ></NewModal>
      </div>
    );
  }
}

export default App;
