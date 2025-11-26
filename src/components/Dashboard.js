import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2>Work from Home</h2>
        <nav>
          <ul>
            <li>
              <button
                className="logout-button"
                onClick={() => { /*todo sign out */ }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}


export default Dashboard;
