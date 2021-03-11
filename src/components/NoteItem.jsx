function NoteItem(props){
    const { note } = props;
    const {title, content, time} = note;
    //console it
    return(<>
        <li onClick={() => {props.openModal()}}>
            <div>{time}</div>
            <div>
                {title}
            </div>
            <div id="contentGrid">
                {content}
            </div>
        </li>
            <button onClick={() => {
                    if (window.confirm("Are u sure?")) {
                      props.onDelete();
                    }
                  }}>X</button>
</>
    )
}

export default NoteItem;