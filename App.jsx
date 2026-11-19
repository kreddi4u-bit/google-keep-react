import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import CreateNote from "./components/CreateNote.jsx";
import NotesGrid from "./components/NotesGrid.jsx";
import { Icon } from "./components/Icon.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
import { starterNotes } from "./data.js";

// Shown when there is nothing to display.
function EmptyState({ message }) {
  return (
    <div className="empty-state">
      <Icon name="bulb" size={112} />
      <p>{message}</p>
    </div>
  );
}

export default function App() {
  // Notes and the theme are saved in the browser, so they survive a refresh.
  const [notes, setNotes] = useLocalStorage("keep-react-notes", starterNotes);
  const [theme, setTheme] = useLocalStorage("keep-react-theme", () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  const [query, setQuery] = useState("");

  // Tell the page which theme is on, so the CSS can switch colours.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // The notes that match the search box.
  const visibleNotes = useMemo(() => {
  const search = query.trim().toLowerCase();

  if (!search) return notes;

  return notes.filter((note) =>
    (note.title + " " + note.text).toLowerCase().includes(search)
  );
}, [notes, query]);

  function addNote({ title, text, color }) {
    const newNote = { id: String(Date.now()), title, text, color };
    setNotes((current) => [newNote, ...current]);
  }

  function deleteNote(id) {
    setNotes((current) => current.filter((note) => note.id !== id));
  }

  function changeColor(id, color) {
    setNotes((current) =>
      current.map((note) => (note.id === id ? { ...note, color } : note))
    );
  }

  // Moves the dragged note to the place of the note it was dropped on.
  function reorderNotes(dragId, targetId) {
    setNotes((current) => {
      const from = current.findIndex((note) => note.id === dragId);
      const to = current.findIndex((note) => note.id === targetId);
      if (from < 0 || to < 0 || from === to) return current;
      const next = [...current];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  }

  return (
    <>
      <Navbar
        query={query}
        onQueryChange={setQuery}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <main className="main">
        <CreateNote onAdd={addNote} />

        {notes.length === 0 ? (
          <EmptyState message="Notes you add appear here" />
        ) : visibleNotes.length === 0 ? (
          <EmptyState message="No matching notes found" />
        ) : (
          <NotesGrid
            notes={visibleNotes}
            onDelete={deleteNote}
            onColorChange={changeColor}
            onReorder={reorderNotes}
          />
        )}
      </main>
    </>
  );
}
