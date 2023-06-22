'use client';
import { PostSkeleton } from '../../components/PostSkeleton';
import Image from 'next/image';
import Form from '../create/page';
import Video from '@/components/Video';

const getPostData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch post data. Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

export default async function getAllPosts() {
  try {
    const posts = await getPostData();

    return (
      <section>
        <div className="w-full lg:h-[400px] h-auto">
          <Video
            className=""
            src={`https://res.cloudinary.com/dcxx6ihq2/video/upload/v1687428345/video-bg_at4id5.mp4`}
            type="video/mp4"
          />
        </div>

        <Form />
        {posts?.map((post, i) => (
          <div key={i}>
            <PostSkeleton
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
              image={post.image}
            />
          </div>
        ))}
      </section>
    );
  } catch (error) {
    console.error(error);
    // Handle the error gracefully, e.g., show an error message
    return <div>Error occurred while fetching posts.</div>;
  }
}
