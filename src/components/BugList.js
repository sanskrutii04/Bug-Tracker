import React from 'react';
import BugItem from './BugItem';

const BugList = ({ bugs, toggleResolve, deleteBug }) => {
  if (bugs.length === 0) return <p>No bugs reported.</p>;
  return (
    <div className="bug-list">
      {bugs.map(bug => (
        <BugItem key={bug.id} bug={bug} toggleResolve={toggleResolve} deleteBug={deleteBug} />
      ))}
    </div>
  );
};

export default BugList;