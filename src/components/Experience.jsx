import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
import springboot from "../assets/spring-boot.png"
import mui from "../assets/mui.png"

import ibm from "../assets/ibm.png"
import gitlab from "../assets/gitlab.png"
import laravel from "../assets/laravel.png"
import php from "../assets/php.png"
import googlecloud from "../assets/googlecloud.png"
import next from "../assets/next.png"
import cubernetes from "../assets/cubernetes.png"
import docker from "../assets/docker.png"
import bootstrap from "../assets/bootstrap.jpeg"
import angular from "../assets/angular.png"
import python from "../assets/python.png"
import java from "../assets/java.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: angular,
      title: "Angular",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: html,
      title: "html",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 25,
      src: python,
      title: "Python",
      style: "shadow-gray-400",
    },
    {
      id: 26,
      src: java,
      title: "Java",
      style: "shadow-gray-400",
    },

    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 11,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 13,
      src: springboot,
      title: "Spring Boot",
      style: "shadow-green-500",
    },
    {
      id: 14,
      src: mui,
      title: "MaterialUI",
      style: "shadow-white",
    },
    {
      id: 15,
      src: ibm,
      title: "IBM",
      style: "shadow-gray-400",
    },
    {
      id: 16,
      src: gitlab,
      title: "Gitlab",
      style: "shadow-gray-400",
    },
    {
      id: 17,
      src: laravel,
      title: "Laravel",
      style: "shadow-gray-400",
    },
    {
      id: 18,
      src: php,
      title: "PHP",
      style: "shadow-slate-400",
    },
    {
      id: 19,
      src: googlecloud,
      title: "Google Cloud",
      style: "shadow-yellow-400",
    },
    {
      id: 20,
      src: next,
      title: "Next Js",
      style: "shadow-gray-400",
    },
    {
      id: 21,
      src: cubernetes,
      title: "Cubernetes",
      style: "shadow-blue-400",
    },
    {
      id: 22,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id: 23,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-red-400",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
   
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full "
     >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
     <div className="pb-1 mt-11">
             <div className="mt-11">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
       </div>
            </div>
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
       
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
