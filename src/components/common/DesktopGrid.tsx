// src/components/common/DesktopGrid.js

function DesktopGrid() {
  return (
    <div className="flex-grow bg-blue-100 p-4 grid grid-cols-4 gap-4">
      {/* Tambahkan elemen atau ikon desktop di sini */}
      <div>
        <div className="bg-white shadow-md p-4 rounded-md">Icon 1</div>
        <div className="bg-white shadow-md p-4 rounded-md">Icon 2</div>
        <div className="bg-white shadow-md p-4 rounded-md">Icon 3</div>
      </div>
      {/* ... */}
    </div>
  );
}

export default DesktopGrid;
