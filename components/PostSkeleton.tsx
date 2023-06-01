import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IPROPS {
  title: string;
  content: string;
  createdAt: string | number;
  image: string;
}

export const PostSkeleton = ({ title, content, createdAt, image }: IPROPS) => {
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
      <div className="mx-auto flex flex-col my-5 rounded-xl lg:w-[800px] w-[400px] p-10 bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-2xl font-medium font-sans">{title}</h1>
        <h2 className="mt-5">{content}</h2>
        {/* Images container  */}
        <div className="flex lg:flex-row flex-col my-5 mx-auto gap-2 ">
          {image.map((image, i) => (
            <div key={i}>
              <Link href={image} target="_blank">
                <Image
                  alt="gallery"
                  src={image}
                  width={300}
                  height={300}
                  className="rounded-md min-h-full hover:scale-[1.2] transition-all"
                />
              </Link>
            </div>
          ))}
        </div>

        <p className="flex justify-end">{formattedDate}</p>
      </div>
    </section>
  );
};
