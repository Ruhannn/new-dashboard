import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaHeart, FaRegSadCry } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdOutlinePhoneInTalk, MdSupportAgent } from "react-icons/md";

export const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState("");

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-950/50"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg mx-auto mt-12 overflow-hidden bg-white border rounded-lg shadow-xl border-stone-300"
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="What do you need?"
          className="relative w-full p-3 text-lg border-b border-stone-300 placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results found for{" "}
            <span className="text-violet-500">"{value}"</span>
          </Command.Empty>

          <Command.Group
            heading="Feelings"
            className="mb-3 text-sm text-stone-400"
          >
            <Command.Item className="flex items-center gap-2 p-2 text-sm transition-colors rounded cursor-pointer text-stone-950 hover:bg-stone-200">
              <FaHeart />
              Love
            </Command.Item>
            <Command.Item className="flex items-center gap-2 p-2 text-sm transition-colors rounded cursor-pointer text-stone-950 hover:bg-stone-200">
              <FaRegSadCry />
              Sadness
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Integrations"
            className="mb-3 text-sm text-stone-400"
          >
            <Command.Item className="flex items-center gap-2 p-2 text-sm transition-colors rounded cursor-pointer text-stone-950 hover:bg-stone-200">
              <MdOutlinePhoneInTalk />
              Talk Services
            </Command.Item>
            <Command.Item className="flex items-center gap-2 p-2 text-sm transition-colors rounded cursor-pointer text-stone-950 hover:bg-stone-200">
              <MdSupportAgent />
              Support
            </Command.Item>
          </Command.Group>

          <Command.Item className="flex items-center gap-2 p-2 text-sm transition-colors rounded cursor-pointer text-stone-50 hover:bg-stone-700 bg-stone-950">
            <FiLogOut />
            Sign Out
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
