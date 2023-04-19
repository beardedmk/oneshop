import React from "react";
import Body from "./Body";
import SidebarLarge from "./SidebarLarge";
import SidebarSmall from "./SidebarSmall";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router";
function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
  });

  function checkWidth() {
    setWidth(window.innerWidth);
  }

  return (
    <div className="App flex">
      {width < 720 ? <SidebarSmall /> : <SidebarLarge />}

      <Outlet />
    </div>
  );
}

export default Home;
