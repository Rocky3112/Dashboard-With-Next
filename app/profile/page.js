"use client";
import Image from "next/image";
import React, { useState } from "react";
import image from "../../public/image.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [heart, setHeart] = useState(false);

  const handleHeartClick = () => {
    setHeart((prevHeart) => !prevHeart);
    toast.success("Added to favorites!");
  };

  return (
    <>
      <div className="bg-slate-300 p-5 my-10 ms-20 w-[900px] mx-auto rounded-xl">
        <div className="flex items-center gap-5">
          <div className="w-1/2">
            <Image
              src={image}
              width={400}
              height={500}
              alt="Picture of the author"
              className="rounded-lg "
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold">AH Rocky</h2>
            <ul className="list-inside my-6 pl-10"></ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              esse nobis a illum ea vel obcaecati tenetur totam laboriosam
              reiciendis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates nihil rerum ea nostrum totam quae. Molestias alias qui harum.
            </p>

            <div className="flex justify-between gap-10 mt-5">
              <p className="bg-amber-400 rounded-xl font-semibold px-3 py-2 text-lg text-white">
                Rating 4.5
              </p>
              <button onClick={handleHeartClick} disabled={heart}>
                {heart === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Profile;
