import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="text-stone-950 bg-stone-100">{children}</div>;
};

export default Layout;
