import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  
  const [typeEffect] = useTypewriter({
    words:['Full Stack Developer', 
           'React Developer',
           'React Native Developer', 
           'Spring Boot Developer',
           'Angular Developer',
           'Java Developer',
           'AI Developer',
           'Next Js Developer',
           'Javascript Developer',
           'Python Developer',
           'React 3D developer',
           'System Architect'
          ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
    
  })
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <p className="text-4xl sm:text-7xl  text-white">
              I'm a <span className="typeEffect">{typeEffect}</span>
            </p>
           <p className="text-gray-300 py-4 max-w-3">
              Seasoned Full-Stack Developer with over 20 years of experience in building and designing 
              web applications, websites, and software. Passionate about leveraging modern technologies 
              like React, Angular, Material-UI, Next.js, Spring Boot, Java, Python and AI to deliver 
              high-quality web and mobile applications for diverse clients. Experienced in developing 
              3D software using React Three Fiber and working on projects across various industries 
              including tech companies, banks, and healthcare. 
              </p>
           
               <div>
               <p className="text-gray-300 py-4 max-w-3">
                Skilled in developing AI-based applications, including machine learning models for predictive analytics, natural language processing (NLP) for chatbots, and AI-driven personalization features. Adept at creating intuitive user interfaces, scalable back-end systems, and integrating RESTful APIs. Committed to continuous learning and achieving innovative solutions through coding and AI-driven approaches.
                </p>
              </div>
          

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
                 Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
