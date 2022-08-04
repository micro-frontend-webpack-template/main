import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
const LayoutAdminNavbar = React.lazy(() => import("Layout/AdminNavbar"));
const LayoutHeaderStats = React.lazy(() => import("Layout/HeaderStats"));
const LayoutAdminDashboard = React.lazy(() => import("Layout/AdminDashboard"));
const LayoutAdminSettings = React.lazy(() => import("Layout/AdminSettings"));
const LayoutAdminTables = React.lazy(() => import("Layout/AdminTables"));
const LayoutFooterAdmin = React.lazy(() => import("Layout/FooterAdmin"));
const Sidebar = React.lazy(() => import("Sidebar/Index"));

function App() {
  return (
    <>
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>

      <div className="relative md:ml-64 bg-blueGray-100">
        <ErrorBoundary>
          <LayoutAdminNavbar />
        </ErrorBoundary>
        {/* Header */}
        <ErrorBoundary>
          <LayoutHeaderStats />
        </ErrorBoundary>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <ErrorBoundary>
                  <LayoutAdminDashboard />
                </ErrorBoundary>
              }
            />
            <Route
              path="/settings"
              exact
              element={
                <ErrorBoundary>
                  <LayoutAdminSettings />
                </ErrorBoundary>
              }
            />
            <Route
              path="/tables"
              exact
              element={
                <ErrorBoundary>
                  <LayoutAdminTables />
                </ErrorBoundary>
              }
            />
          </Routes>

          <ErrorBoundary>
            <LayoutFooterAdmin />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

export default App;
