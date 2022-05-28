import React from "react";
import mypic from '../assetes/mypic.jpg'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

function Home() {
  return (
    <div>
      <div class="hero min-h-screen z-30 px-20">
        <div class="hero-content flex-col lg:flex-row-reverse gap-20">
          <img
            src={mypic}
            class="w-[394px] h-[455px] rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 class="text-5xl font-bold">Hi There! I'm </h1>
            <h1 class="text-5xl font-bold">Imran Mahmud Ullash</h1>
            <h1 class="text-2xl font-bold">React Developer</h1>
            <p class="py-6 max-w-xl">
            Hi, this is Imran Mahmud Ullash professional front-end, web developer. I am a Web Developer with a fast-learning ability seeking a challenging career to utilize my skills, keep learning, and share. I love to learn new things and make them workable with my creativity. 
            </p>
            <div className="mb-5 flex items-center">
              <span className="mx-2">
                <FiGithub className="text-5xl cursor-pointer p-2 rounded-lg bg-black text-white hover:bg-white hover:text-black" />
              </span>
              <span className="mx-2">
              <FaLinkedinIn className="text-5xl cursor-pointer p-2 rounded-lg bg-black text-white hover:bg-white hover:text-black" />
              </span>
              <span className="mx-2">
              <FaFacebookF className="text-5xl cursor-pointer p-2 rounded-lg bg-black text-white hover:bg-white hover:text-black" />
              </span>
            </div>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
