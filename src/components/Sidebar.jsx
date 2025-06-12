import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-60 p-4 min-h-screen border-r">
      <ul className="space-y-2">
        <li><a href="#" className="text-blue-600">Dashboard</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
