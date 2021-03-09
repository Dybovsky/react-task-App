import React from "react";

class NewNote extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        content: '',
      };
    }

    saveNote(event){
        event.preventDefault();
        const note = {
            id: Date.now(),
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


    render(){
        return(
            <form onSubmit={(event) => this.saveNote(event)}>
               <div>
                    <label htmlFor="title">Title</label>
                    <input
                    type="textarea"
                    name="title"
                    id="title"
                    value={this.state.title}
                    onChange={(event) => this.saveTitle(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <input
                    type="textarea"
                    name="content"
                    id="content"
                    value={this.state.content}
                    onChange={(event) => this.saveContent(event.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Add +</button>
                </div>
            </form>
        )
    }
}


export default NewNote;