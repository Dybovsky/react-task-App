import React from 'react';
//import { ModalBody } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


class NewModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        // consol props
    }


 
    render(){
      return (
        <Modal 
          // change show to is open, props.closeModal
          show={this.props.show}
          onHide={this.props.onHide}>
            
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.note.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.note.content}
          </Modal.Body>
        
        </Modal>
    
  )}
}


export default NewModal