import React from 'react';
import ReactPlayer from 'react-player';
import { cityData } from '../app/models/seed';
import Video from './Video';
import Link from 'next/link';

type Props = {};

const Skeleton = (props: Props) => {
  return (
    <div className="md:max-w-[1200px] my-[200px] grid grid-cols-3 gap-[50px] rounded-lg ">
      {cityData?.map((city) => (
        <div key={city.id} className="relative hover:opacity-[0.85]">
          <Link href={`${city.id}`}>
            <Video
              className="w-auto min-w-[300px] rounded-[40px] h-[500px] "
              src={city.cover}
              type="video/mp4"
            />
            <div className="absolute bottom-10 left-0 mt-5 w-full text-white font-bold px-10 ">
              <div className="text-2xl font-sans font-light">{city.title}</div>
              {/* reviews */}
              <div className="flex px-5 mt-5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <div> &nbsp;&nbsp;{Math.floor(Math.random() * 10)}</div>

                <div className="pl-5">
                  {Math.floor(Math.random() * 200)} Reviews
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
