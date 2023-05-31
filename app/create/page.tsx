'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useSession } from 'next-auth/react';
import placeholderImage from '../../public/placeholder-image.png';
import createDestinationImg from '../../public/travel-destination.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const initState = {
  title: '',
  content: '',
  userId: '',
  image: [],
};

export default function FormSubmit() {
  const router = useRouter();
  const [state, setState] = useState(initState);
  const [imageFile, setimageFile] = useState(initState.image);
  const [isDisabled, setDisabled] = useState(true);
  const { data: session } = useSession();

  //updating intialstate with new data
  const handleChange = (e) => {
    const title = e.target.title;

    const userId = session?.user.id;

    setState((prevData) => ({
      ...prevData,
      [title]: e.target.value,
      userId,
      image: imageFile,
    }));
  };

  // submit image to cloudnary
  const submitImage = () => {
    setDisabled(false);
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
        setState((prevData) => ({
          ...prevData,
          image: data.url,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // main form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, content, userId, image } = state;

    // Send data to API route
    if (imageFile.length > 10) {
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
      router.push('/submissions');
    }
  };

  const content = (
    <section className="flex justify-center flex-col mx-auto">
      <Image
        src={createDestinationImg}
        alt="create-destination"
        className="mx-auto mt-10 lg:w-4/5 w-auto lg:h-[700px] h-auto"
      />
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
          required
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
          required
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
          <input
            type="file"
            onChange={(e) => setimageFile(e.target.files[0])}
          />

          <Image
            src={imageFile?.length > 10 ? imageFile : placeholderImage}
            alt="image"
            width={300}
            height={300}
          />
          <button
            className="p-1 mb-6 text-md rounded-md text-white bg-[#2196f3] hover:cursor-pointer hover:bg-slate-30"
            onClick={(e) => {
              submitImage(e);
            }}
          >
            Upload Image
          </button>
        </div>
        <p className="mb-5 font-extralight italic">
          {' '}
          * Please make sure you upload the image first before submittion!. Your
          submissions will be displayed in the "Your Submission" section of our
          website!
        </p>
        <button
          id="main_form"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-slate-100 disabled:opacity-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          disabled={isDisabled}
        >
          Submit
        </button>
      </form>
    </section>
  );

  return content;
}
