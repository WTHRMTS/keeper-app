import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    noteTitle: "",
    noteContent: "",
  });
  function handleChange(event) {
    const {value, name} = event.target
    setNote(prevValue => {
      if (name === "title") {
        return {
          noteTitle: value,
          noteContent: prevValue.noteContent
        };
      } else if (name === "content") {
        return {
          noteTitle: prevValue.noteTitle,
          noteContent: value
        };
      }
    })
  }
  
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.noteTitle} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.noteContent}/>
        <button onClick={(event)=> {
          props.onAdd(note);
          setNote({
              noteTitle: "",
              noteContent: "",
            })
            event.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
