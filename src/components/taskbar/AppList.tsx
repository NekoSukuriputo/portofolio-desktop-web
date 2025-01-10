import React from "react";

type AppListProps = {
  windowId: string;
  onRestore: (windowId: string) => void;
};

const AppList: React.FC<AppListProps> = ({ windowId, onRestore }) => {
  return (
    <div
      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer"
      onClick={() => onRestore(windowId)}
    >
      {windowId}
    </div>
  );
};

export default AppList;
