import Image from 'next/image';
import Line from '../public/llline.svg';
import Skeleton from '@/components/Skeleton';
import { cityData } from './models/seed';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:mt-10 mt-20 md:px-0 px-10">
      <h1 className="font-sans lg:text-6xl text-5xl font-bold tracking-wider text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
        Discover the World
      </h1>
      <Image
        src={Line}
        alt="line"
        className="md:absolute lg:flex h-[250px] md:left-[692px] md:top-[180px] left-[50px] top-[223px] hidden"
      />
      <p className="mt-10 md:text-xl text-lg relative text-center">
        Unlock a World of Inspiration with Handcrafted Destination Guides by
        Your Favorite Creators
      </p>
      <Skeleton cityData={cityData} />
    </main>
  );
}
