import React, { useEffect, useState } from "react";

import { Outlet } from "react-router";

import Header from "./Header";

function Layout() {
  return (
    <div className="">
      <Header />

      <div className="App flex pt-16">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
