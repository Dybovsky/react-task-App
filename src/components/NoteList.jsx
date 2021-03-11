import NoteItem from "./NoteItem";


function NoteList(props){
    return(
        <ul>
            {props.notes.map((note, index) => 
            <NoteItem
            key={note.id}
            note={note}
            onDelete={() => props.onDeleteNote(index)}
            openModal={props.openModal}
            />
            )}
        </ul>
    )
}

export default NoteList;