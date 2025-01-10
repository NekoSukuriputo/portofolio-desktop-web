import React, { useState, useRef } from "react";
import Draggable from "react-draggable";

type WindowProps = {
  onClick: () => void;
  onClose: () => void;
  onMinimize: () => void;
};

const Window: React.FC<WindowProps> = ({ onClick, onClose, onMinimize }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const draggableRef = useRef<HTMLDivElement>(null);

  const toggleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMaximized(!isMaximized);
  };

  return (
    <Draggable nodeRef={draggableRef} disabled={isMaximized}>
      <div
        className={`flex absolute flex-col bg-white border-2 rounded-md shadow-lg transition-all duration-300 overflow-hidden
        ${
          isMaximized ? "top-0 left-0 w-100 h-[calc(100vh-3rem)]" : "w-96 h-96"
        }
      `}
        onClick={onClick}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-blue-500 p-2 text-white cursor-move">
          <div className="text-sm font-semibold">My Application</div>
          <div className="flex space-x-2">
            <button
              className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400"
              onClick={(e) => {
                e.stopPropagation();
                onMinimize();
              }}
            ></button>
            <button
              className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600"
              onClick={toggleMaximize}
            ></button>
            <button
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            ></button>
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
