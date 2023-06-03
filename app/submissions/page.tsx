import { PostSkeleton } from '../../components/PostSkeleton';
import React from 'react';

const getPostData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/create`, {
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
