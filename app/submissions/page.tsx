import { PostSkeleton } from '../../components/PostSkeleton';
import React from 'react';
import { getServerSession } from 'next-auth';

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
  const session = await getServerSession();
  try {
    const posts = await getPostData();

    return (
      <section>
        {!session && (
          <div className="flex ">
            <span className="flex justify-center text-center font-sans font-semibold text-2xl mx-auto my-5">
              You too can create your own travel destination. Simply Sign in!
            </span>
          </div>
        )}
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
