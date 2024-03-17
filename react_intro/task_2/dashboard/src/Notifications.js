import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils.js';
import closeIcon from './close-icon.png';

function Notifications() {
  return (
    <div class="Notifications"
      style={{
        position: 'relative',
        border: '2px dashed red'
        }}>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
      <button
        style={{
          position: 'absolute',
          top: '0',
          right: '0'
        }}
        onClick={console.log('Close button has been clicked')}
        aria-label="Close"
      >
        <img src={closeIcon} alt="close-icon" class="close-icon"/>
      </button>
	</div>
  );
}

export default Notifications;