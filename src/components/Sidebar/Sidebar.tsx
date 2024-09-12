import AccountToggle from "./AccountToggle";

export default function Sidebar() {
  return (
    <div>
      <div className="sticky overflow-y-scroll top-4 h-[calc(100vh-48px)]">
        {/* main content */}
        <AccountToggle />
      </div>
      {/* plan toggle */}
    </div>
  );
}
