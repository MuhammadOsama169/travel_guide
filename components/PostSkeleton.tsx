import React from 'react';

export const PostSkeleton = ({ title, content, createdAt }) => {
  const formattedDate = new Date(createdAt).toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <section className="flex flex-col mx-auto justify-center align-middle max-w-[1080px]">
      <div className="mx-auto flex flex-col my-5 rounded-xl w-[800px] p-10 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-2xl font-medium font-sans">{title}</h1>
        <h2 className="mt-5">{content}</h2>
        <p className="flex justify-end">{formattedDate}</p>
      </div>
    </section>
  );
};
