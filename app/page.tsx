import Image from 'next/image';
import Line from '../public/llline.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:mt-10 mt-20 md:px-0 px-10">
      <h1 className="font-sans md:text-5xl text-2xl font-bold tracking-wider text-center">
        Discover the World
      </h1>
      <Image
        src={Line}
        alt="line"
        className="absolute h-[250px] md:left-[692px] md:top-[160px] left-[50px] top-[223px]"
      />
      <p className="mt-10 md:text-xl text-lg relative text-center">
        Unlock a World of Inspiration with Handcrafted Destination Guides byYour
        Favorite Creators
      </p>
    </main>
  );
}
