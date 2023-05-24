'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useSession } from 'next-auth/react';

const initState = {
  title: '',
  content: '',
  userId: '',
};

export default function FormSubmit() {
  const [state, setState] = useState(initState);
  const [isDisabled, setDisabled] = useState(false);
  const { data: session } = useSession();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);

    const { title, content, userId } = state;

    // Send data to API route
    const res = await fetch('http://localhost:3000/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        userId,
      }),
    });

    const result = await res.json();
  };

  //updating intialstate with new data
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const title = e.target.title;

    const userId = session?.user.id;

    setState((prevData) => ({
      ...prevData,
      [title]: e.target.value,
      userId,
    }));
  };

  const content = (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto max-w-3xl p-6"
    >
      <h1 className="text-4xl mb-4">Create A Travel Destination</h1>

      <label className="text-2xl mb-1" htmlFor="title">
        Country & Name
      </label>
      <input
        className="p-3 mb-6 text-2xl rounded-2xl text-black"
        type="text"
        id="title"
        title="title"
        placeholder="Russia, Moscow"
        value={state.title}
        onChange={handleChange}
        autoFocus
      />

      <label className="text-2xl mb-1" htmlFor="content">
        Description
      </label>
      <textarea
        className="p-3 mb-6 text-2xl rounded-2xl text-black"
        id="content"
        title="content"
        rows="5"
        placeholder="Best Summer spots in Moscow ..."
        value={state.content}
        onChange={handleChange}
      />
      <p
        className={`flex items-center justify-between gap-2 ${
          state.content.length > 200 ? 'text-[#FF0000]' : 'text-black'
        }`}
      >
        {state.content.length}/200
      </p>
      <button
        className="p-3 mb-6 text-2xl rounded-2xl text-black border-solid border-white border-2 max-w-xs bg-[#2196f3] hover:cursor-pointer hover:bg-slate-300 disabled:bg-slate-300"
        disabled={state.content.length > 100 ? true : false}
      >
        Submit
      </button>
    </form>
  );

  return content;
}
