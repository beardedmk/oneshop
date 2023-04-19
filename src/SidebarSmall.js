import { useState } from "react";
import SidebarLarge from "./SidebarLarge";

function SidebarSmall() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleSidebarToggle(e) {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div>
      {!sidebarOpen ? (
        <div
          className="p-1 hover:cursor-pointer min-h-full bg-orange-100"
          onClick={handleSidebarToggle}
        >
          <hr className="w-3 mt-1  border-t-orange-500" />
          <hr className="w-3 mt-1  border-t-orange-500" />
          <hr className="w-3 mt-1  border-t-orange-500" />
        </div>
      ) : (
        <div onClick={handleSidebarToggle}>
          <div className="text-xl font-semibold hover:cursor-pointer ml-40 mb-1 pb-1 px-2 ring-1 text-orange-500 ring-orange-400 rounded-full  w-fit ">
            x
          </div>
          <SidebarLarge />
        </div>
      )}
    </div>
  );
}

export default SidebarSmall;
