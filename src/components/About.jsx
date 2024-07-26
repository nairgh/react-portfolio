import React from "react";

const About = () => {
  return (
    
    <div
      name="about"
      className="w-full h-800 bg-gradient-to-b from-gray-800 to-black text-white h-screen about "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-md mt-4">
        Highly skilled Full-Stack Developer and experience in designing, developing, 
        and deploying robust web and mobile applications.
        </p>
        <br />
        <p className="text-md">
         Expertise in modern front-end frameworks like React and Angular, coupled with back-end proficiency 
         in Node.js and Java. Extensive experience in designing and implementing RESTful APIs, 
         and utilizing Docker/Cubernetes for containerization and deployment. Proficient in working with various 
         databases, including Oracle, SQL, and NoSQL (MongoDB, PostgreSQL). Deployed applications creating pipelines.
         Proficient in front-end development using CSS3, Tailwind CSS, MUI (Material-UI) and Bootstrap, creating responsive and visually appealing user interfaces. 
         Experienced in Python for scripting, automation, and data analysis. 
         Strong problem-solving abilities and a passion for delivering high-quality software solutions.
        </p>
        <p className="text-gray-300 py-3 max-w-3">
          Developed AI based applications for data analysis. Created Backend Rest Api's using spring boot, node, java,python
        </p>
        <p className="text-gray-300 py-0 max-w-3">
          I work with powerful technologies to help companies succeed. Javascript, Springboot, Typescript, Kafka, Java, Python.
        </p>
      </div>
    </div>
  );
};

export default About;
