import { PostSkeleton } from '../../components/PostSkeleton';
import React from 'react';

const getPostData = async () => {
  const res = await fetch('http://localhost:3000/api/create');
  return res.json();
};

export default async function getAllPosts() {
  const posts = await getPostData();

  return (
    <section>
      {posts.map((post, i) => (
        <div key={i}>
          <PostSkeleton
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
          />
        </div>
      ))}
    </section>
  );
}
