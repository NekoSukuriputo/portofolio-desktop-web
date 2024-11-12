// src/components/common/DesktopGrid.js

function DesktopGrid() {
  return (
    <div className="flex-grow bg-blue-100 p-4 ">
      {/* Tambahkan elemen atau ikon desktop di sini */}
      <div className="grid grid-cols-3 gap-4 w-1/4 h-1/3">
        <div className="bg-white size-fit shadow-md p-4 rounded-md">Icon 1</div>
        <div className="bg-white size-fit shadow-md p-4 rounded-md">Icon 2</div>
        <div className="bg-white size-fit shadow-md p-4 rounded-md">Icon 3</div>
      </div>
      {/* ... */}
    </div>
  );
}

export default DesktopGrid;
