import img1 from '../assets/IMG_4466.jpg'

const AboutMe = () => {
    return (
        <>
        <h1 className="text-6xl font-bold text-center text-cyan-700">About Me</h1>
           <div className="hero min-h-[300px] md:min-h-[600px]">
            
  <div data-aos='fade-up' data-aos-delay='200' className="hero-content flex-col lg:flex-row">
    <img
      src={img1}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="ml-12">
      <h1 className="text-4xl font-bold">Sharmin Akter</h1>
      <p className="py-6">
      Hey there! I Am Sharmin Akter,  your friendly neighborhood front-end web developer extraordinaire. With a passion for pixels and a knack for coding, I bring websites to life with sleek designs and seamless user experiences.
      I am a non-CSE student with a strong foundation in Mathematics. My journey into web development has been both challenging and rewarding. Starting without any prior programming knowledge, I dedicated myself to learning and practicing consistently. Over time, I developed proficiency in tools and technologies like HTML, CSS, JavaScript, React, Tailwind CSS, DaisyUI, Firebase, MongoDB etc. These skills have enabled me to build modern, responsive, and visually appealing web applications. The transition from mathematics to web development has been a transformative experience, allowing me to leverage my analytical thinking in solving real-world coding problems.

      Outside of programming, I have a passion for reading books that broaden my perspective and exploring new places to experience different cultures and environments. These hobbies not only refresh my mind but also inspire me to think creatively and approach challenges with a fresh outlook.
      </p>
    </div>
  </div>
</div>
        </>
    );
};

export default AboutMe;

{/* <marquee behavior="scroll" direction="left" className="inline-block">Sharmin Akter</marquee> */}

