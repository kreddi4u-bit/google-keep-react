import { useEffect, useRef, useState } from "react";
import ColorPicker from "./ColorPicker.jsx";

// The "Take a note..." box. It opens into a small form.
export default function CreateNote({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("default");
  const boxRef = useRef(null);

  // Saves the note (if it has anything in it) and closes the form.
  function save() {
    if (title.trim() || text.trim()) {
      onAdd({ title: title.trim(), text: text.trim(), color });
    }
    setTitle("");
    setText("");
    setColor("default");
    setOpen(false);
  }

  // Clicking outside the box saves and closes it.
  useEffect(() => {
    if (!open) return;
    function handleOutsideClick(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) save();
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open, title, text, color]);

  return (
    <section
      className="create-note"
      ref={boxRef}
      data-color={open ? color : "default"}
      aria-label="Create a note"
      onKeyDown={(e) => {
        if (open && e.key === "Escape") save();
      }}
    >
      {!open ? (
        <button
          type="button"
          className="create-note__collapsed"
          onClick={() => setOpen(true)}
        >
          Take a note...
        </button>
      ) : (
        <div className="create-note__form">
          <input
            className="create-note__title"
            placeholder="Title"
            aria-label="Note title"
            maxLength={120}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="create-note__text"
            placeholder="Take a note..."
            aria-label="Note text"
            rows={3}
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="create-note__footer">
            <ColorPicker value={color} onChange={setColor} />
            <button type="button" className="text-button" onClick={save}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}