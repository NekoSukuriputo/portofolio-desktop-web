import React, { useState } from "react";
import Window from "./Window";

function DesktopGrid() {
  const [windows, setWindows] = useState([]);
  const [zIndex, setZIndex] = useState(1); // Mengatur urutan z-index jendela

  // Fungsi untuk menambah jendela baru
  const openWindow = () => {
    setWindows([
      ...windows,
      {
        id: windows.length,
        zIndex: zIndex, // Set zIndex sesuai urutan
      },
    ]);
    setZIndex(zIndex + 1); // Meningkatkan zIndex agar jendela baru selalu di atas
  };

  // Fungsi untuk mengatur jendela yang diklik agar tampil di atas
  const bringToFront = (id) => {
    const updatedWindows = windows.map((window) =>
      window.id === id
        ? { ...window, zIndex: Math.max(...windows.map((w) => w.zIndex)) + 1 }
        : window
    );
    setWindows(updatedWindows);
  };

  return (
    <div className="flex-grow bg-blue-100 p-4 relative">
      {/* Ikon Desktop */}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 w-1/2 md:w-1/4 h-1/3">
        <div className="bg-white p-4 shadow-md rounded-md">Icon 1</div>
        <div className="bg-white p-4 shadow-md rounded-md">Icon 2</div>
        <div className="bg-white p-4 shadow-md rounded-md">Icon 3</div>
        <button
          className="bg-blue-500 p-2 text-white rounded-md mt-4"
          onClick={openWindow}
        >
          Open Window
        </button>
      </div>

      {/* Jendela yang Dibuka */}
      {windows.map((window) => (
        <div
          key={window.id}
          style={{ zIndex: window.zIndex }} // Set zIndex jendela
          onClick={() => bringToFront(window.id)} // Panggil fungsi untuk bring window to front
        >
          <Window onClick={() => bringToFront(window.id)} />
        </div>
      ))}
    </div>
  );
}

export default DesktopGrid;
