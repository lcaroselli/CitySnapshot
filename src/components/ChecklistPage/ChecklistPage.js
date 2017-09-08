import React from 'react';
import './ChecklistPage.css';

const ChecklistPage = () => {
  return (
    <div className='checklist-wrapper'>
      <h1>Checklist</h1>
      <ul>
        <li>Preparing to Move</li>
        <li>Moving</li>
        <li>Settling In</li>
      </ul>
    </div>
  )
}

export default ChecklistPage;
