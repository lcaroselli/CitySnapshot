import React from 'react';
import './ChecklistPage.css';
import List from '../../assets/list.svg';
import Truck from '../../assets/truck.svg';
import Box from '../../assets/box.svg';

const ChecklistPage = () => {
  return (
    <div className='checklist-wrapper'>
      <h1>Checklist</h1>
      <aside>
        <button><img src={ List } alt='List Icon' />Preparing to Move</button>
        <button><img src={ Truck } alt='Truck Icon' />Moving</button>
        <button><img src={ Box } alt='Box Icon' />Settling In</button>
      </aside>
    </div>
  )
}

export default ChecklistPage;

//onClick to display a new container of checklists 
