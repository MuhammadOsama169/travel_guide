'use client';
import { useState } from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function CreatePosts() {
  const [title, setTitle] = useState('');
  const [isDisabled, setDisabled] = useState(false);

  //create posts`
  // const {mutate} =useMutation(
  //     async(title) => await axios.post("/api/posts/addPost"),{title}
  // )
  return (
    <form>
      <div className="w-full flex flex-col justify-center mx-auto md:max-w-[1080px] my-10 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label className="sr-only">Your comment</label>
          <textarea
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows="4"
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button
            type="submit"
            disabled={isDisabled || title.length > 300}
            className={`inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-200 ${
              title.length > 300
                ? 'bg-gray-500'
                : 'bg-blue-700 hover:bg-blue-800'
            }`}
          >
            Post comment
          </button>
          <div className="flex pl-0 space-x-1 sm:pl-2">
            <p
              className={`flex items-center justify-between gap-2 ${
                title.length > 300 ? 'text-[#FF0000]' : 'text-gray-500'
              }`}
            >
              {title.length}/300
            </p>
            <button
              type="button"
              className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Upload image</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
