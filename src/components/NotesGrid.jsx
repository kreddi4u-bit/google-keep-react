import { useState } from "react";
import NoteCard from "./NoteCard.jsx";

// The masonry grid of notes. It also handles dragging one note onto another
// to change their order.
export default function NotesGrid({ notes, onDelete, onColorChange, onReorder }) {
  const [dragId, setDragId] = useState(null);
  const [overId, setOverId] = useState(null);

  function endDrag() {
    setDragId(null);
    setOverId(null);
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onColorChange={onColorChange}
          isDragging={dragId === note.id}
          isDropTarget={overId === note.id && dragId !== note.id}
          dragProps={{
            draggable: true,
            onDragStart: (e) => {
              setDragId(note.id);
              e.dataTransfer.effectAllowed = "move";
              e.dataTransfer.setData("text/plain", note.id);
            },
            onDragOver: (e) => {
              if (dragId && dragId !== note.id) {
                e.preventDefault();
                setOverId(note.id);
              }
            },
            onDrop: (e) => {
              e.preventDefault();
              if (dragId && dragId !== note.id) onReorder(dragId, note.id);
              endDrag();
            },
            onDragEnd: endDrag,
          }}
        />
      ))}
    </div>
  );
}