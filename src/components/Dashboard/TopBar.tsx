import { FiCalendar } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className="px-4 pb-4 mt-2 mb-4 border-b border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="block text-sm font-bold"> Good morning, Kami!</span>
          <span className="block text-xs text-stone-500">
            Friday, Feb 31th 2024
          </span>
        </div>

        <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-blue-700 px-3 py-1.5 rounded">
          <FiCalendar />
          <span>Prev 6 Months</span>
        </button>
      </div>
    </div>
  );
};
export default TopBar;
