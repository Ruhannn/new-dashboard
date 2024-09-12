import AccountToggle from "./AccountToggle";
import { Plan } from "./Plan";
import { RouteSelect } from "./RouteSelect";
import Search from "./Search";

export default function Sidebar() {
  return (
    <div>
      <div className="sticky overflow-y-scroll top-4 h-[calc(100vh-32px-48px)]">
        {/* main content */}
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>
      {/* plan toggle */}
      <Plan />
    </div>
  );
}
