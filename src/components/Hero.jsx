import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
 import img from '../assets/IMG_4457.jpg'



const Hero = () => {
    return (
        <>
           <div className="hero min-h-[300px] md:min-h-[600px] mt-24 my-4">
           <div data-aos='fade-up' data-aos-delay='250' className="hero-content flex-col lg:flex-row-reverse">
           <img
           src={img}
            className="rounded-full h-64 w-64 p-3 border-4 border-cyan-700 " data-aos='fade-up' data-aos-delay='400' />
          <div>
           <h1 className="text-5xl font-bold">Hi! I'm SHARMIN</h1>
           <p className="text-xl font-semibold text-gray-700">Frontend Developer</p>
           <p className="mt-4 max-w-xl text-gray-600">
          Passionate about crafting seamless and interactive web experiences using HTML5, CSS3, JavaScript, React, Tailwind CSS, and other modern technologies.
        </p>
        <div className="flex space-x-6 mt-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 text-2xl"
          >
            <FaGithub />
          </a>
        
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600  text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="mt-6">
          <a
            // href={resume}
            download
            className="bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium"
          >
            Download Resume
          </a>
        </div>
              </div>
            </div>
             </div> 
        </>
    );
};

export default Hero;