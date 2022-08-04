import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const LayoutAdminNavbar = React.lazy(() => import("Layout/AdminNavbar"));
const LayoutHeaderStats = React.lazy(() => import("Layout/HeaderStats"));
const LayoutAdminDashboard = React.lazy(() => import("Layout/AdminDashboard"));
const LayoutAdminSettings = React.lazy(() => import("Layout/AdminSettings"));
const LayoutAdminTables = React.lazy(() => import("Layout/AdminTables"));
const LayoutFooterAdmin = React.lazy(() => import("Layout/FooterAdmin"));
const Sidebar = React.lazy(() => import("Sidebar/Index"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Sidebar />

      <div className="relative md:ml-64 bg-blueGray-100">
        <LayoutAdminNavbar />

        {/* Header */}

        <LayoutHeaderStats />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/" exact element={<LayoutAdminDashboard />} />
            <Route path="/settings" exact element={<LayoutAdminSettings />} />
            <Route path="/tables" exact element={<LayoutAdminTables />} />
          </Routes>

          <LayoutFooterAdmin />
        </div>
      </div>
    </Suspense>
  );
}

export default App;
