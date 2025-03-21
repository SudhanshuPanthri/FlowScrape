import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ThemeModeToggle";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-screen">
      {children}
      <Separator />
      <footer className="flex items-center justify-between p-2i">
        <Logo fontSize="text-xl" iconSize={20} />
        <ModeToggle />
      </footer>
    </div>
  );
};

export default Layout;
