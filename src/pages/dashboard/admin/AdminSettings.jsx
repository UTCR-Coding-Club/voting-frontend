import React from 'react';
import './AdminSettings.css';

const AdminSettings = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div 
        className="settings-modal"
        onClick={e => e.stopPropagation()}
      >
        <div className="settings-header">
          <h2 className="text-2xl font-semibold">Settings</h2>
        </div>
        
        <div className="settings-content">
          <div className="space-y-4 w-full">
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <input type="checkbox" />
            </div>
          </div>
        </div>

        <button className="settings-exit-button" onClick={onClose}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;