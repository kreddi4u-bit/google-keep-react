
import { useState } from "react";
import ColorPicker from "./ColorPicker.jsx";
import { Icon, IconButton } from "./Icon.jsx";

// One note. It can be coloured, deleted and dragged.
export default function NoteCard({
  note,
  onDelete,
  onColorChange,
  isDragging,
  isDropTarget,
  dragProps,
}) {
  const [showColors, setShowColors] = useState(false);

  const classes = ["note"];
  if (isDragging) classes.push("is-dragging");
  if (isDropTarget) classes.push("is-drop-target");

  return (
    <article className={classes.join(" ")} data-color={note.color} {...dragProps}>
      {note.title && <h3 className="note__title">{note.title}</h3>}
      {note.text && <p className="note__text">{note.text}</p>}

      {showColors && (
        <ColorPicker
          value={note.color}
          onChange={(color) => onColorChange(note.id, color)}
        />
      )}

      <div className="note__actions">
        <IconButton
          label="Change colour"
          onClick={() => setShowColors((open) => !open)}
        >
          <Icon name="palette" size={20} />
        </IconButton>
        <IconButton label="Delete note" onClick={() => onDelete(note.id)}>
          <Icon name="trash" size={20} />
        </IconButton>
      </div>
    </article>
  );
}
