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


    render(){
        return(
            <form onSubmit={(event) => this.saveNote(event)}>
                <div class="form">
               <div class="titleDiv">
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
                <div class="contentDiv">
                    <label htmlFor="content">Content</label>
                    <textarea
                    //type="textarea"
                    name="content"
                    id="content"
                    value={this.state.content}
                    onChange={(event) => this.saveContent(event.target.value)}
                    />
                </div>
                <div class="btn">
                    <button type="submit"
                    id="btnAdd">Add +</button>
                </div>
                </div>
            </form>
        )
    }
}


export default NewNote;