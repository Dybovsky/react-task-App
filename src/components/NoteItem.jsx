function NoteItem(props){
    const { note } = props;
    const {title, content} = note;
    //console it
    return(
        <li>
            <div>
                {title}
            </div>
            <div>
                {content}
            </div>
            <button onClick={props.onDelete}>X</button>
        </li>
    )

}

export default NoteItem;