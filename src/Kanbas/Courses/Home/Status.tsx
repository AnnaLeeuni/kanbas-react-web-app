import React from 'react';
// Import the icons from your chosen library or use your own SVGs
import { FaFileImport, FaCloudDownloadAlt, FaHome, FaStream, FaBullhorn, FaChartBar, FaBell } from 'react-icons/fa';

function Status() {
  // Define your menu items and corresponding icons
  const menuItems = [
    { name: 'Import Existing Content', icon: <FaFileImport /> },
    { name: 'Import from Commons', icon: <FaCloudDownloadAlt /> },
    { name: 'Choose Home Page', icon: <FaHome /> },
    { name: 'View Course Stream', icon: <FaStream /> },
    { name: 'New Announcement', icon: <FaBullhorn /> },
    { name: 'New Analytics', icon: <FaChartBar /> },
    { name: 'View Course Notifications', icon: <FaBell /> }
  ];

  return (
    <ul className="status-menu">
      {menuItems.map((item, index) => (
        <li key={index} className="status-menu-item">
          {item.icon}
          <span className="status-menu-text">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Status;
