import React, { useState } from "react";
import Window from "./Window";

type DesktopGridProps = {
  onMinimize: (id: number) => void;
  onClose: (id: number) => void;
  windows: { id: number; zIndex: number; isMinimized: boolean }[];
  setWindows: React.Dispatch<
    React.SetStateAction<{ id: number; zIndex: number; isMinimized: boolean }[]>
  >;
};

const DesktopGrid: React.FC<DesktopGridProps> = ({
  onMinimize,
  onClose,
  windows,
  setWindows,
}) => {
  const [zIndex, setZIndex] = useState(1); // Mengatur urutan z-index jendela

  const openWindow = () => {
    setWindows([
      ...windows,
      {
        id: windows.length,
        zIndex: zIndex, // Set zIndex sesuai urutan
        isMinimized: false,
      },
    ]);
    setZIndex(zIndex + 1); // Meningkatkan zIndex agar jendela baru selalu di atas
  };

  const bringToFront = (id: number) => {
    const maxZIndex = Math.max(...windows.map((win) => win.zIndex));
    setWindows(
      windows.map((win) =>
        win.id === id ? { ...win, zIndex: maxZIndex + 1 } : win
      )
    );
  };

  return (
    <div className="h-[calc(100vh-3rem)] relative bg-blue-100">
      {/* Ikon Desktop */}
      <div className="p-4">
        <button
          className="bg-blue-500 p-2 text-white rounded-md"
          onClick={openWindow}
        >
          Open Window
        </button>
      </div>

      {/* Render Windows */}
      {windows.map(
        (window) =>
          !window.isMinimized && (
            <div
              key={window.id}
              style={{ zIndex: window.zIndex }}
              className="absolute"
              onClick={() => bringToFront(window.id)}
            >
              <Window
                onMinimize={() => onMinimize(window.id)}
                onClose={() => onClose(window.id)}
                onClick={() => bringToFront(window.id)}
              />
            </div>
          )
      )}
    </div>
  );
};

export default DesktopGrid;
