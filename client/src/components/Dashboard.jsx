import React from 'react';

const Dashboard = ({ user, logout }) => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div>
        <h2>Welcome, {user?.name || 'User'}!</h2>
        <p>You are now logged in.</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;