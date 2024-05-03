import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";

function AppLayout() {
  return (
    <div className="container">
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
