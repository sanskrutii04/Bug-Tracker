import React, { useState } from 'react';

const BugForm = ({ addBug }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addBug({ title: title.trim(), description: description.trim(), resolved: false, id: Date.now() });
    setTitle('');
    setDescription('');
  };

  return (
    <form className="bug-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bug title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Bug description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Bug</button>
    </form>
  );
};

export default BugForm;