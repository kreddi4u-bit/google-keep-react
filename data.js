// The colour choices for notes. Each name matches a data-color rule in index.css.
export const COLORS = [
  { name: "default", label: "Default" },
  { name: "red", label: "Red" },
  { name: "orange", label: "Orange" },
  { name: "yellow", label: "Yellow" },
  { name: "green", label: "Green" },
  { name: "teal", label: "Teal" },
  { name: "blue", label: "Blue" },
  { name: "purple", label: "Purple" },
  { name: "pink", label: "Pink" },
  { name: "gray", label: "Gray" },
];

// Notes shown the first time the app opens.
export const starterNotes = [
  {
    id: "1",
    title: "Welcome to Keep",
    text: "Click Take a note to add one.\nUse the palette to colour a note and the bin to delete it.\nDrag notes to reorder them.",
    color: "yellow",
  },
  {
    id: "2",
    title: "Project deadlines",
    text: "Portfolio: submit Friday\nTwitter clone: add videos\nKeep clone: deploy to Netlify",
    color: "blue",
  },
  {
    id: "3",
    title: "Shopping list",
    text: "Milk\nEggs\nBread\nCoffee\nBananas",
    color: "green",
  },
  {
    id: "4",
    title: "Study plan",
    text: "Mon: HTML and CSS\nTue: JavaScript\nWed: React components\nThu: State and props\nFri: Deploy and review",
    color: "default",
  },
  {
    id: "5",
    title: "Gift ideas",
    text: "Headphones for Sam\nPlant for Mom\nBook for Dad",
    color: "pink",
  },
  {
    id: "6",
    title: "Reminder",
    text: "Record the Loom video before the deadline. Keep it under five minutes.",
    color: "orange",
  },
];