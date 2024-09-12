import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AccountToggle() {
  return (
    <div className="pb-4 mt-2 mb-4 border-b border-stone-300">
      <button className="flex p-0.5 hover:bg-slate-200 rounded transition-colors relative gap-2 w-full items-start">
        <img
          src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Felix"
          alt="avatar"
          className="rounded shadow size-8 shrink-0 bg-slate-200"
        />
        <div className="text-start">
          <span className="block text-sm font-bold">KamiRu</span>
          <span className="block text-xs text-stone-500">kami@ru.com</span>
        </div>
        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
      </button>
    </div>
  );
}
