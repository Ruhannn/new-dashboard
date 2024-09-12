import { useState } from "react";
import { IconType } from "react-icons";
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";

export const RouteSelect = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>("Dashboard");

  const routes = [
    { title: "Dashboard", Icon: FiHome },
    { title: "Team", Icon: FiUsers },
    { title: "Invoices", Icon: FiPaperclip },
    { title: "Integrations", Icon: FiLink },
    { title: "Finance", Icon: FiDollarSign },
  ];

  return (
    <div className="space-y-1">
      {routes.map((route) => (
        <Route
          key={route.title}
          Icon={route.Icon}
          title={route.title}
          selected={selectedRoute === route.title}
          onClick={() => setSelectedRoute(route.title)}
        />
      ))}
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
  onClick,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-blue-500" : ""} />
      <span>{title}</span>
    </button>
  );
};
