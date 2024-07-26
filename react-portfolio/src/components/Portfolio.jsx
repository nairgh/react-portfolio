import React from "react";
import api from "../assets/portfolio/api.jpg";
import grey from "../assets/portfolio/grey.jpg";
import dishdelight from "../assets/portfolio/dishdelights.jpg";
import shoploom from "../assets/portfolio/shoploom.jpg";
import letusChat from "../assets/portfolio/letus-chat.jpg";
import socialbook from "../assets/portfolio/socialbook.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      link: 'https://viewcryptostatus.netlify.app/',
      repo: 'https://github.com/nairgh/crypto-tracker'
    },
    {
      id: 2,
      src: letusChat,
      link: 'https://letuscat.onrender.com/chats',
      repo: 'https://github.com/nairgh/MERN-chat'
    },
    {
      id: 3,
      src: grey,
      link: 'https://greyish-style.netlify.app/',
      repo: 'https://github.com/nairgh/grayscale-design'
    },
    {
      id: 4,
      src: socialbook,
      link: 'https://socialmedia-socialbook.netlify.app/',
      repo: 'https://github.com/nairgh/socialMedia-socialbook'
    },
    {
      id: 5,
      src: shoploom,
      link: 'https://shoploom.netlify.app/',
      repo: 'https://github.com/nairgh/Ecommerce-Redux-Toolkit'
    },
    {
      id: 6,
      src: dishdelight,
      link: 'https://delightdish.netlify.app/',
      repo: 'https://github.com/nairgh/dish-delights'
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-gray-800  to-black w-full text-white md: h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
