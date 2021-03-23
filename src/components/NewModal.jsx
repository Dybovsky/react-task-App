import React from 'react';
//import { ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import NewNote from './NewNote';


class NewModal extends React.Component{
    constructor(props){
        super(props);
        
       
    }


 
    render(){
      return (
        <Modal 
          show={this.props.show}
          onHide={this.props.onHide}>
            
        <NewNote 
          title={this.props.note.title} 
          content={this.props.note.content} 
          note={this.props.note} 
          edit={true} 
          btnText='Edit'
          onEditNote={(editedNote) => this.props.onEditNote(editedNote)}
          >

        </NewNote>
       
        </Modal>
    
  )}
}


export default NewModal