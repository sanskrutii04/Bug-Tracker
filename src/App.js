import React, { useState, useEffect } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import './styles.css';

const localStorageKey = 'bugtrackr.bugs';

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const storedBugs = localStorage.getItem(localStorageKey);
    if (storedBugs) {
      setBugs(JSON.parse(storedBugs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(bugs));
  }, [bugs]);

  const addBug = (bug) => {
    setBugs(prev => [bug, ...prev]);
  };

  const toggleResolve = (id) => {
    setBugs(prev => prev.map(bug => bug.id === id ? { ...bug, resolved: !bug.resolved } : bug));
  };

  const deleteBug = (id) => {
    setBugs(prev => prev.filter(bug => bug.id !== id));
  };

  return (
    <div className="app">
      <h1>BugTrackr</h1>
      <BugForm addBug={addBug} />
      <BugList bugs={bugs} toggleResolve={toggleResolve} deleteBug={deleteBug} />
    </div>
  );
}

export default App;