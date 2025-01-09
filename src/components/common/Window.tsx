import React, { useState } from "react";
import Draggable from "react-draggable"; // Import react-draggable untuk fitur drag

const Window = ({ onClick }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximize = (e) => {
    e.stopPropagation(); // Mencegah pemicu onClick dari elemen induk
    setIsMaximized(!isMaximized);
  };

  return (
    <Draggable disabled={isMaximized}>
      <div
        className={`flex absolute flex-col bg-white border-2 rounded-md shadow-lg transition-all duration-300 overflow-hidden
          ${
            isMaximized
              ? "top-0 left-0 w-full h-[calc(100vh-3rem)]"
              : "w-96 h-96"
          }
        `}
        onClick={onClick} // Saat window diklik, panggil onClick untuk memperbarui layer
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-blue-500 p-2 text-white rounded-t-md cursor-move">
          <div className="text-sm font-semibold">My Application</div>
          <div className="flex space-x-2">
            <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"></button>{" "}
            {/* Minimize */}
            <button
              className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600"
              onClick={toggleMaximize}
            ></button>{" "}
            {/* Maximize */}
            <button className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600"></button>{" "}
            {/* Close */}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 p-4">
          <p>
            Welcome to the application window! You can add your content here.
          </p>
        </div>
      </div>
    </Draggable>
  );
};

export default Window;
