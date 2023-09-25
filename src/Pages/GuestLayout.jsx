import React from "react";
import { Outlet } from "react-router-dom";

export const GuestLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
