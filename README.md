Keep React
A simple Google Keep style notes app built with React and Vite. Notes are saved in your browser with localStorage, so there is no backend.
How to run it
You need Node.js installed (the LTS version).
npm install
npm run dev
Then open the address shown in the terminal (usually http://localhost:5173).
Navigation bar: logo, search box and a light/dark switch.
Create a note: click "Take a note...", add a title and text, pick a colour, then click Close (or click outside the box, or press Esc).
Masonry grid: notes of different heights sit in columns, 4 columns on a laptop and 1 on a phone.
Delete notes: the bin icon on every note.
Colour coding: pick a colour when creating a note, or change it later with the palette icon.
Dark mode: the moon/sun button in the navbar. It follows your system setting at first and remembers your choice.
Drag and drop: drag a note onto another to change the order.
Search: filters notes as you type.
Saved automatically: notes, their order, their colours and the theme survive a refresh.
Project structure
keep-react/
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
└── src/
    ├── main.jsx            starts the app
    ├── App.jsx             holds the notes, search and theme
    ├── data.js             colours and starter notes
    ├── index.css           all the styling
    ├── hooks/
    │   └── useLocalStorage.js
    └── components/
        ├── Navbar.jsx
        ├── CreateNote.jsx
        ├── NotesGrid.jsx
        ├── NoteCard.jsx
        ├── ColorPicker.jsx
        └── Icon.jsx
Deploy to Netlify
Push the project to a GitHub repository.
On Netlify choose Add new site, Import an existing project and pick the repository.
Netlify reads netlify.toml: the build command is npm run build and the publish folder is dist.
Click Deploy.
Live link
Add your Netlify link here after deploying.