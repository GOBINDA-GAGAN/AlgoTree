import React from "react";
import Sidebar from "../Dashboard/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className=" fixed top-0 left-0 min-h-screen">
        <Sidebar />
      </div>

      <main className="ml-16  md:ml-64 w-full h-screen overflow-y-auto bg-[#F4F8EE] p-4 md:p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
