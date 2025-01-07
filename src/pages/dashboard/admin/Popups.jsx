import React from "react";
import "./Popups.css";

export const LogoutPopup = ({ isVisible, onConfirm, onCancel }) => {
  if (!isVisible) return null;

  return (
    <div className="settings-overlay">
      <div className="settings-modal">
        <div className="settings-header">
          <h2>Confirm Logout</h2>
        </div>
        <div className="settings-content">
          <p>Are you sure you want to log out?</p>
          <div className="popup-actions">
            <button className="confirm-button" onClick={onConfirm}>
              Yes
            </button>
            <button className="cancel-button" onClick={onCancel}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NotificationsPopup = ({ isVisible, onClose, notifications = [] }) => {
  if (!isVisible) return null;

  return (
    <div className="settings-overlay">
      <div className="settings-modal">
        <div className="settings-header">
          <h2>Notifications</h2>
        </div>
        <div className="settings-content">
          {notifications.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            <div className="notifications-list">
              {notifications.map((notification, index) => (
                <div key={index} className="notification-item">
                  <p>{notification.message}</p>
                  <span className="notification-date">{notification.date}</span>
                </div>
              ))}
            </div>
          )}
          <div className="popup-actions">
            <button className="cancel-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};