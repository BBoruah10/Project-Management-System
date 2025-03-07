"use-client";

import React from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";
//to access GLOBAL state in the layout-->to use the state we have to pass the DashboardLayout in the StoreProvider
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/*sidebar-->flex*/}
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}
      >
        {/*navbar-->content*/}
        <Navbar />
        {children}
      </main>
    </div>
  );
};
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
