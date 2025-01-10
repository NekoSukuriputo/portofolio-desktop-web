import React from "react";
import StartMenu from "./StartMenu";
import SystemTray from "./SystemTray";

type TaskbarProps = {
  minimizedWindows: { id: number }[];
  onRestore: (id: number) => void;
};

const Taskbar: React.FC<TaskbarProps> = ({ minimizedWindows, onRestore }) => {
  return (
    <div className="h-12 z-50 bg-vintage-orange text-slate-700 flex items-center">
      {/* Start Menu */}
      <StartMenu />

      {/* Icons for Minimized Windows */}
      <div className="flex space-x-2">
        {minimizedWindows.map((win) => (
          <button
            key={win.id}
            className="px-4 py-2 bg-vintage-orange text-slate-700 rounded-md hover:bg-vintage-orange-hover"
            onClick={() => onRestore(win.id)}
          >
            App {win.id}
          </button>
        ))}
      </div>

      {/* System Tray di kanan */}
      <div className="ml-auto mr-2">
        <SystemTray />
      </div>
    </div>
  );
};

export default Taskbar;
