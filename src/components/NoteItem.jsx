function NoteItem(props){
    const { note } = props;
    const {title, content, time} = note;
    //console it
    return(
        <li>
            <div>{time}</div>
            <div>
                {title}
            </div>
            <div id="contentGrid">
                {content}
            </div>
            <button onClick={() => {
                    if (window.confirm("Are u sure?")) {
                      props.onDelete();
                    }
                  }}>X</button>
        </li>
    )

}

export default NoteItem;