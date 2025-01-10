import React, { useState } from "react";
import DesktopGrid from "@/components/common/DesktopGrid";
import Taskbar from "@/components/taskbar/Taskbar";

const App: React.FC = () => {
  const [windows, setWindows] = useState<
    { id: number; zIndex: number; isMinimized: boolean }[]
  >([]);

  const handleMinimize = (id: number) => {
    setWindows(
      windows.map((win) =>
        win.id === id ? { ...win, isMinimized: true } : win
      )
    );
  };

  const handleClose = (id: number) => {
    setWindows(windows.filter((win) => win.id !== id));
  };

  const handleRestore = (id: number) => {
    setWindows(
      windows.map((win) =>
        win.id === id ? { ...win, isMinimized: false } : win
      )
    );
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <DesktopGrid
        onMinimize={handleMinimize}
        onClose={handleClose}
        windows={windows}
        setWindows={setWindows}
      />
      <Taskbar
        minimizedWindows={windows.filter((win) => win.isMinimized)}
        onRestore={handleRestore}
      />
    </div>
  );
};

export default App;
