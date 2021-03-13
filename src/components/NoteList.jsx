import NoteItem from "./NoteItem";


function NoteList(props){
    return(
        <ul>
            {props.notes.map((note, index) => 
            <NoteItem
            
            key={note.id}
            note={note}
            onDelete={() => props.onDeleteNote(index)}
            onEditNote={(editedNote) => props.onEditNote(editedNote)}
            
            />)}
            
        </ul>
    )
}

export default NoteList;