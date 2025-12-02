import React from 'react';

const BugItem = ({ bug, toggleResolve, deleteBug }) => {
  return (
    <div className={`bug-item ${bug.resolved ? 'resolved' : ''}`}>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <div className="actions">
        <button onClick={() => toggleResolve(bug.id)}>
          {bug.resolved ? 'Reopen' : 'Resolve'}
        </button>
        <button onClick={() => deleteBug(bug.id)} className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default BugItem;