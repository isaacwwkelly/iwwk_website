import { DropdownMenu } from "radix-ui";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeMenu({ theme, toggleTheme }) {
  const handleToggleTheme = (desiredTheme) => {
    if (theme === desiredTheme) return;
    toggleTheme();
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="ml-auto bg-[var(--header-bg)] text-[var(--header-text)] border border-[var(--border-color)] px-4 py-2 rounded"
          aria-label="Customise options"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="rounded-md p-2 shadow-lg border border-[var(--border-color)]"
          sideOffset={14}
        >
          <DropdownMenu.Item
            className="rounded text-sm text-[var(--foreground)] flex items-center gap-2 cursor-pointer"
            onClick={() => handleToggleTheme("light")}
          >
            <SunIcon />
            Light
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="rounded text-sm text-[var(--foreground)] flex items-center gap-2 cursor-pointer"
            onClick={() => handleToggleTheme("dark")}
          >
            <MoonIcon />
            Dark
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
