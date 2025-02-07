import  { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  // FaBootstrap,
  // FaSass,
  FaReact,
} from "react-icons/fa";
import {  SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";

const skillsData = [
  {
    name: "HTML5",
    percentage: 95,
    color: "bg-red-500",
    icon: <FaHtml5 className="text-red-500 text-3xl" />,
  },
  {
    name: "CSS3",
    percentage: 85,
    color: "bg-blue-500",
    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
  },
  {
    name: "JavaScript",
    percentage: 90,
    color: "bg-yellow-400",
    icon: <FaJs className="text-yellow-400 text-3xl" />,
  },
   {
     name: "MongoDB Atlas",
     percentage: 80,
     color: "bg-green-700",
     icon: <SiMongodb className="text-green-700 text-3xl" />,
   },
  {
    name: "Tailwind",
    percentage: 80,
    color: "bg-blue-500",
    icon: <SiTailwindcss className="text-blue-500 text-3xl" />,
  },
   {
     name: "Firebase",
     percentage: 75,
     color: "bg-red-600",
     icon: <SiFirebase className="text-red-600 text-3xl" />,
   },
  {
    name: "React",
    percentage: 80,
    color: "bg-teal-500",
    icon: <FaReact className="text-teal-500 text-3xl" />,
  },
  // {
  //   name: "Redux",
  //   percentage: 80,
  //   color: "bg-indigo-500",
  //   icon: <SiRedux className="text-indigo-500 text-3xl" />,
  // },
];

const Skills = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    return (
        <div>
             <div id="skills" data-aos='fade-up' data-aos-delay='200' className=" my-4 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-600 to-lime-400 bg-clip-text text-transparent border-b-4 pb-4 w-fit mx-auto italic">
        My Skills
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg p-6 transform hover:-translate-y-2 hover:shadow-xl transition duration-300"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center gap-4 mb-4">
              {skill.icon}
              <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
            </div>
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden h-6 relative">
              <div
                className={`h-6 ${skill.color} text-white text-right pr-2 rounded-lg`}
                style={{
                  width: `${hoveredSkill === index ? skill.percentage : 0}%`,
                  transition: "width 0.7s ease-in-out",
                }}
              >
                <span className="absolute left-2 text-xs text-black font-bold transition duration-300">
                  {skill.percentage}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Skills;