import NewModal from "./NewModal"
import React from 'react';

class NoteItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen : false,

        }
    }

    openModal() {
        this.setState({ isOpen: true });
        
      }
    
      closeModal() {
        this.setState({ isOpen: false });
      }
  

    
    render(){
    return(
    <>
        <li 
        style={{ cursor: 'pointer' }}
        onClick={() => this.openModal()}>
            <div>{this.props.note.time}
            
            <p id="editTime">
                {this.props.note.editTime}
            </p>
            </div>
            <div>
                {this.props.note.title}
            </div>
            <div id="contentGrid">
                {this.props.note.content}
            </div>
           
        </li>
            <button onClick={() => {
                if (window.confirm("Are u sure?")) {
                    this.props.onDelete();
                }
            }}>X</button>
        <NewModal
        onEditNote={
            (editedNote) => {this.props.onEditNote(editedNote)
            
                this.closeModal()
            }
        }
        show={this.state.isOpen}
        onHide={() => this.closeModal()}
        note={this.props.note} />
</>
    )
}}

export default NoteItem;
