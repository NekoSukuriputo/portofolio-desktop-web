// src/components/taskbar/Taskbar.js

import AppList from "./AppList";
import StartMenu from "./StartMenu";
import SystemTray from "./SystemTray";

function Taskbar() {
  return (
    <div className="h-12 z-50 bg-vintage-orange text-slate-700 flex items-center">
      {/* Start Menu di kiri */}
      <div className="mx-2">
        <StartMenu />
      </div>

      {/* Daftar aplikasi aktif */}
      <div className="mx-2">
        <AppList />
      </div>

      {/* System Tray di kanan */}
      <div className="ml-auto mr-2">
        <SystemTray />
      </div>
    </div>
  );
}

export default Taskbar;
