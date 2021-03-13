import React from "react";

class NewNote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: this.props.title, //this props value
        content: this.props.content,
      };
    }

    saveNote(){
        const timeCreated = new Date();
        const note = {
            id: Date.now(),
            time: `${timeCreated.getDate()} ${timeCreated.toLocaleString("eng", {
                month: "long",
            })} ${timeCreated.getHours()} : ${timeCreated.getMinutes()}`,
            title: this.state.title,
            content: this.state.content,
        };
        
        this.props.onSaveNote(note);
        this.setState({ title: '', content: '' });
    }
    
    saveTitle(value){
        this.setState({ title: value });
    }
    
    saveContent(value){
        this.setState({ content: value });
    }
    
    onEditOrAdd(e){
        e.preventDefault();
        if(this.props.edit){
            this.editNote()
           
        }else{
          this.saveNote()
        }
    }
    
    editNote(){
        const timeCreated = new Date();
        const editedNote = this.props.note;
        editedNote.title = this.state.title;
        editedNote.content = this.state.content;
        editedNote.editTime = `${timeCreated.getDate()} ${timeCreated.toLocaleString("eng", {
            month: "long",
        })} ${timeCreated.getHours()} : ${timeCreated.getMinutes()}`
        
        
        this.props.onEditNote(editedNote)

        
    }
    
    render(){
        return(
            <form onSubmit={(event) => this.onEditOrAdd(event)}>
                <div className="form">
               <div className="titleDiv">
                    <label htmlFor="title">Title</label>
                    <input
                    type="textarea"
                    // width="300px"
                    // height="150px"
                    name="title"
                    id="title"
                    value={this.state.title}
                    onChange={(event) => this.saveTitle(event.target.value)}
                    />
                </div>
                <div className="contentDiv">
                    <label htmlFor="content">Content</label>
                    <textarea
                    
                    name="content"
                    id="content"
                    value={this.state.content}
                    onChange={(event) => this.saveContent(event.target.value)}
                    />
                </div>
                <div className="btn">
                   
                        <button 
                        type="submit"
                        id="btnAdd"
                        
                        >
                            {this.props.btnText}
                        </button>

                    
                </div>
                </div>
            </form>
        )
    }
}


export default NewNote;