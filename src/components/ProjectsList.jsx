// BlogSection.js

import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectsList = () => {
  // Placeholder data for recent blogs
  const Mydata = [
    {
      id: 1,
      title: "Pokedex pokemon",
      content: "React Js , APIs , Css",
      git: "https://github.com/ManishChand349/pokedex-pokemon",
      url: "https://pokedex-pokemon-smoky.vercel.app/",
    },
    {
      id: 2,
      title: "MarketE",
      content: "React js , Styled-Components",
      git: "https://github.com/ManishChand349/MarketE",
      url: "https://market-e-manishchand349.vercel.app/",
    },
    
   
    // Add more blog entries as needed
  ];
  const MyComponents = [
    {
      id: 1,
      title: "College Site",
      content: "React js , Styled-Components",
      git: "https://github.com/ManishChand349/CollegeSite",
      url: "https://college-site-one.vercel.app/",
    },
    
    
   
    // Add more blog entries as needed
  ];
  return (
    <>
    <div className="bg-gray-100 p-8">
      {/* Recent Blogs Section */}
      <div className="mb-8 mx-auto max-w-7xl ">
        <h2 className="text-5xl font-semibold mb-4  text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {Mydata.map((data) => (
            <div
              key={data.id}
              className="bg-red-50 p-4 rounded shadow-md bg-gradient-to-r from-red-400 to-blue-500 hover:from-pink-500 hover:to-white-500 "
            >
              <h3 className=" font-semibold  mb-2 text-2xl ">{data.title}</h3>
              <p className="text-gray-700">{data.content}</p>
              <div className="flex justify-between mt-2">
                <a href={data.git} target="_blank">
                  <AiOutlineGithub className="text-3xl cursor-pointer" />
                </a>
                <a href={data.url} target="_blank">
                  <FaArrowUpRightFromSquare className="text-3xl cursor-pointer" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-gray-100 p-8  mt-1">
      {/* Recent Blogs Section */}
      <div className="mb-8 mx-auto max-w-7xl ">
        <h2 className="text-5xl font-semibold mb-4  text-center">React Components</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {MyComponents.map((data) => (
            <div
              key={data.id}
              className="bg-red-50 p-4 rounded shadow-md bg-gradient-to-r from-red-400 to-blue-500 hover:from-pink-500 hover:to-white-500 "
            >
              <h3 className=" font-semibold  mb-2 text-2xl ">{data.title}</h3>
              <p className="text-gray-700">{data.content}</p>
              <div className="flex justify-between mt-2">
                <a href={data.git} target="_blank">
                  <AiOutlineGithub className="text-3xl cursor-pointer" />
                </a>
                <a href={data.url} target="_blank">
                  <FaArrowUpRightFromSquare className="text-3xl cursor-pointer" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectsList;
