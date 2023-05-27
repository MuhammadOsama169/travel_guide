'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useSession } from 'next-auth/react';
import placeholderImage from '../../public/placeholder-image.png';
import Image from 'next/image';

const initState = {
  title: '',
  content: '',
  userId: '',
  image: '',
};

export default function FormSubmit() {
  const [state, setState] = useState(initState);
  const [imageFile, setimageFile] = useState('');
  const [isDisabled, setDisabled] = useState(false);
  const { data: session } = useSession();

  //updating intialstate with new data
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const title = e.target.title;

    const userId = session?.user.id;

    const image = imageFile;

    setState((prevData) => ({
      ...prevData,
      [title]: e.target.value,
      userId,
      image,
    }));
  };

  const submitImage = () => {
    const data = new FormData();
    data.append('file', imageFile);
    data.append('upload_preset', 'qhtiia95');
    data.append('cloud_name', 'dwz4buven');

    fetch('https://api.cloudinary.com/v1_1/dwz4buven/image/upload', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setimageFile(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);

    const { title, content, userId, image } = state;

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
        image,
      }),
    });

    const result = await res.json();
  };

  console.log(imageFile);
  const content = (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto max-w-3xl p-6 my-10"
    >
      <h1 className="lg:text-5xl text-3xl mb-5 font-bold">
        Create A Travel Destination
      </h1>

      <label className="text-2xl mb-1" htmlFor="title">
        Country & Name of Location
      </label>
      <input
        className="p-3 mb-6 text-xl rounded-2xl text-black"
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
        className="p-3 mb-6 text-xl rounded-2xl text-black"
        id="content"
        title="content"
        rows="5"
        placeholder="Best place for a good time in Moscow ..."
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
      {/* Upload Image btn */}
      <div className="flex flex-col  align-middle mx-auto gap-5">
        <input type="file" onChange={(e) => setimageFile(e.target.files[0])} />

        <Image
          src={imageFile?.length > 10 ? imageFile : placeholderImage}
          alt="image"
          width={300}
          height={300}
        />
        <button
          className="p-1 mb-6 text-md rounded-md text-white bg-[#2196f3] hover:cursor-pointer hover:bg-slate-30"
          onClick={submitImage}
        >
          Upload Image
        </button>
      </div>
      <p className="mb-5 font-extralight italic">
        {' '}
        * Please be aware that it takes sometime for us to review your
        submissions. Once submitted you may find your submissions in the "Your
        Submissions" section of our website!
      </p>
      <button
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-slate-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        disabled={state.content.length > 100 ? true : false}
      >
        Submit
      </button>
    </form>
  );

  return content;
}
