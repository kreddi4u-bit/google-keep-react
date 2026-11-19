
import { Icon, IconButton } from "./Icon.jsx";

// The top bar: logo, search box and the light/dark switch.
export default function Navbar({ query, onQueryChange, theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo">
          <Icon name="bulb" size={22} />
        </span>
        <span className="navbar__name">Keep</span>
      </div>

      <form className="navbar__search" role="search" onSubmit={(e) => e.preventDefault()}>
        <Icon name="search" size={20} />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search"
          aria-label="Search notes"
        />
        {query && (
          <IconButton label="Clear search" onClick={() => onQueryChange("")}>
            <Icon name="close" size={20} />
          </IconButton>
        )}
      </form>

      <IconButton
        label={isDark ? "Light mode" : "Dark mode"}
        onClick={onToggleTheme}
      >
        <Icon name={isDark ? "sun" : "moon"} />
      </IconButton>
    </header>
  );
}
