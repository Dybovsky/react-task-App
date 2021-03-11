import React from 'react';
import { ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import NewNote from './NewNote'




class NewModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          
            
            
        }
    }
    


      render(){
  return (
    
        <Modal show={this.props.show}  onHide={this.props.closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <ModalBody>{this.props.content}</ModalBody>
    
        <NewNote></NewNote>
    </Modal>
    
  )}
}


export default NewModal