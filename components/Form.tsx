// pages/create.tsx
'use client';
import React, { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';

const Form: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, content });
    const res = await axios.post('/api/posts', { title, content });
    console.log({ res });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
