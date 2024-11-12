import DesktopGrid from "@/components/common/DesktopGrid";
import Taskbar from "@/components/taskbar/Taskbar";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <DesktopGrid />
      <Taskbar />
    </div>
  );
}

export default App;
