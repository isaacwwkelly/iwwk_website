import { DropdownMenu } from "radix-ui";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeMenu({ theme, toggleTheme }) {
  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <button
      className="bg-[var(--header-bg)] hover:bg-[var(--bg-button-on-hov)] border-2 border-[var(--border-color)] p-2 rounded-lg cursor-pointer"
      aria-label="Customise options"
      onClick={() => handleToggleTheme()}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
