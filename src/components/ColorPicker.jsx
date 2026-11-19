
import { COLORS } from "../data.js";
import { Icon } from "./Icon.jsx";

// A row of colour dots. The chosen colour shows a tick.
export default function ColorPicker({ value, onChange }) {
  return (
    <div className="color-picker" role="group" aria-label="Note colour">
      {COLORS.map((color) => (
        <button
          key={color.name}
          type="button"
          className="swatch"
          data-color={color.name}
          title={color.label}
          aria-label={color.label}
          aria-pressed={value === color.name}
          onClick={() => onChange(color.name)}
        >
          {value === color.name && <Icon name="check" size={14} />}
        </button>
      ))}
    </div>
  );
}
