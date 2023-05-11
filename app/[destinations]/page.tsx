'use client';
import { useParams } from 'next/navigation';
import Video from '../../components/Video';
import { cityData, locationData } from '../models/seed';
import Image from 'next/image';
import arrowSvg from '../../public/arrow.svg';
import hotelSvg from '../../public/hotel.svg';
import beerSvg from '../../public/beer.svg';
import Link from 'next/link';
type Props = {};

const Destination = () => {
  const params = useParams();
  const selectedCity = cityData.find((city) => city.id === params.destinations);
  console.log(locationData[1].media[2]);
  return (
    <main className="my-10">
      <div className="my-10 font-sans text-4xl font-bold text-center flex flex-col">
        {selectedCity.title}
      </div>
      <Video
        className="w-full rounded-[40px] h-[500px] "
        src={selectedCity.cover}
        type="video/mp4"
      />
      <div className="flex justify-center items-center">
        <Image
          src={arrowSvg}
          alt="arrow"
          className="h-[400px] w-[400px] mt-[-50px]"
        />
      </div>
      {/* Hotel section */}
      <div className="flex flex-col justify-center items-center mt-[-50px]">
        <div className="flex justify-center items-center  rounded-full max-w-[1080px] w-[100px] h-[100px] bg-black">
          <Image src={hotelSvg} alt="arrow " className="w-[50px] " />
        </div>
        {/* card */}
        <div className="rounded-lg max-w-[1080px] my-5 shadow-xl">
          <div className="p-10">
            {/* title */}
            <h1 className="font-sans text-2xl font-medium text-center">
              {locationData[0].title}
            </h1>
            <div className="p-10">
              <Video
                className="w-full"
                src={locationData[0].media[2]}
                type="video/mp4"
              />
              <h1 className="font-sans text-xl mt-10">
                {locationData[0].description}
              </h1>
              <Link
                href={locationData[0].link}
                className="flex justify-center "
              >
                <button className="rounded-full bg-black hover:bg-white text-white hover:text-black py-3 px-5 shadow-lg mt-5">
                  Take me there
                </button>
              </Link>
              <div className="flex flex-col justify-center items-center mt-[-50px]">
                <Image
                  src={arrowSvg}
                  alt="arrow"
                  className="h-[400px] w-[400px] "
                />
                <div className="flex justify-center items-center mt-[-50px] rounded-full max-w-[1080px] w-[100px] h-[100px] bg-black">
                  <Image src={beerSvg} alt="arrow " className="w-[50px] " />
                </div>
                <div className="mt-5">
                  <h1 className="font-sans text-2xl font-medium text-center my-10 ">
                    {locationData[1].title}
                  </h1>
                  <Video
                    className="w-full"
                    src={locationData[1].media[2]}
                    type="video/mp4"
                  />
                  <h1 className="font-sans text-xl mt-10">
                    {locationData[1].description}
                  </h1>
                  <Link
                    href={locationData[1].link}
                    className="flex justify-center"
                  >
                    <button className="rounded-full bg-black hover:bg-white text-white hover:text-black py-3 px-5 shadow-lg mt-5">
                      Take me there
                    </button>
                  </Link>
                </div>
                {/* beach */}
                <Image
                  src={arrowSvg}
                  alt="arrow"
                  className="h-[400px] w-[400px] mt-[-50px] "
                />
                <div className="flex justify-center items-center mt-[-50px] rounded-full max-w-[1080px] w-[100px] h-[100px] bg-black">
                  <Image src={beerSvg} alt="arrow " className="w-[50px] " />
                </div>
                <div className="mt-5">
                  <h1 className="font-sans text-2xl font-medium text-center my-10">
                    {locationData[2].title}
                  </h1>
                  <Video
                    className="w-full"
                    src={locationData[2].media[0]}
                    type="video/mp4"
                  />
                  <h1 className="font-sans text-xl mt-10">
                    {locationData[2].description}
                  </h1>
                  <Link
                    href={locationData[2].link}
                    className="flex justify-center"
                  >
                    <button className="rounded-full bg-black hover:bg-white text-white hover:text-black py-3 px-5 shadow-lg mt-5">
                      Take me there
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
