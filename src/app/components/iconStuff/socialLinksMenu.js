import { DropdownMenu } from "radix-ui";
import {
  FileTextIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export default function SocialLinksMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <span
          className="text-[var(--foreground)] hover:underline hover:underline-offset-4 cursor-pointer"
          aria-label="Customise options"
        >
          Links
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="rounded-xl p-2 shadow-lg border-2 border-[var(--border-color)] bg-[var(--header-bg)]"
          sideOffset={14}
        >
          <DropdownMenu.Item className="rounded-md text-sm text-[var(--foreground)] flex items-center gap-2 px-2 py-0.5 cursor-pointer border-2 border-transparent hover:border-[var(--border-color)]">
            <a
              href="/path/to/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileTextIcon />
              <span>Resume</span>
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="rounded-md text-sm text-[var(--foreground)] flex items-center gap-2 px-2 py-0.5 mt-1 cursor-pointer border-2 border-transparent hover:border-[var(--border-color)]">
            <a
              href="https://www.linkedin.com/in/isaacwwkelly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <LinkedInLogoIcon />
              <span>LinkedIn</span>
            </a>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="rounded-md text-sm text-[var(--foreground)] flex items-center gap-2 px-2 py-0.5 mt-1 cursor-pointer border-2 border-transparent hover:border-[var(--border-color)]">
            <a
              href="https://github.com/isaacwwkelly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <GitHubLogoIcon />
              <span>GitHub</span>
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
