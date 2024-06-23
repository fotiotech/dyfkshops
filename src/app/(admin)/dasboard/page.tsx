"use client";

import React from "react";
import DashboardNavBar from "../../../components/navbar/DashboardNavBar";

const page = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden">
      <div className="flex justify-center items-center border-b">
        <span className="px-2">Menu</span>
        <p>Dashboard page</p>
      </div>
      <div>
        <div>
          <DashboardNavBar />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
