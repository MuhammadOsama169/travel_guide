'use client';
import { useState, FormEvent } from 'react';
import { useSession } from 'next-auth/react';
import placeholderImage from '../../public/placeholder-image-removebg.png';
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

    const userId = session?.user?.id;

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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/create`,
        {
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
        }
      );

      const result = await res.json();
      router.push('/submissions');
    }
  };

  const content = (
    <section className="flex justify-center flex-col mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto p-6 my-10 bg-[#E8E8E8]  border-gray-200 rounded-xl lg:w-[800px] w-auto"
      >
        {!session && (
          <h1 className="text-xl text-center mb-5 text-[#AA4A44]">
            You must be sign In in to create a travel destination✨. We
            recommend you sign in through our Home page!
          </h1>
        )}

        <div className=" flex ">
          {session ? (
            <Image
              src={session?.user?.image}
              width={40}
              height={40}
              className="rounded-full md:mr-5 mb-5"
              alt="profile"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-8 mr-2 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}

          <h1 className="lg:text-xl text-xl font-bold align-middle">
            Write a post ✏️{' '}
          </h1>
        </div>
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

        <textarea
          className="p-3 mb-6 text-xl rounded-2xl text-black"
          id="content"
          title="content"
          placeholder="Share something with TravelGuide ✨"
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
