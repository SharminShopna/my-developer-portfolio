
import tutor from '../assets/tutor.png';
import sport from '../assets/sport.png';
import career from '../assets/career.png';
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Tutor Booking Website",
    image: tutor,
    stack: ["React", "Tailwind CSS", "Firebase", "DaisyUi", "MongoDb Atlas", "CSS", "HTML"],
    description: "The Tutor Booking Website is a modern web application designed to connect students with qualified tutors efficiently. Built with React, the platform offers a dynamic and interactive user experience, complemented by a sleek and responsive design styled with Tailwind CSS and DaisyUI. The interface supports dark mode, ensuring a comfortable viewing experience in various lighting conditions. User authentication and authorization are managed securely using Firebase Authentication, allowing students and tutors to create accounts, log in, and manage their profiles effortlessly. The application enables students to search for tutors based on criteria such as subjects, availability, and ratings, with booking data fetched and stored securely in MongoDB Atlas via backend API integration. Real-time updates and notifications are powered by Firebase, ensuring a seamless user experience. The platform's aesthetic appeal is enhanced with custom styling using CSS and HTML, while the use of MongoDB Atlas ensures scalability and reliability for managing user and booking data. This comprehensive solution streamlines the process of finding and booking tutors, making personalized learning more accessible and efficient.",
    liveLink: "https://ecommerce.example.com",
    githubLinkClient: "https://github.com/sharmin112195/assignment-eleven-client",
    githubLinkServer: "https://github.com/sharmin112195/assignment-eleven-server",
    challenges: "Fetching data from the backend by category was challenging. I tried for two consecutive days and nights but couldn’t make it. At 3:30 AM on the second night, I thought to myself that development might not be possible for me, so I decided to give up. I tried to sleep, but couldn’t sleep properly. Then, at 6:00 AM, I sat down again and was able to fetch the data.Also, JWT is causing a lot of issues.",
    improvements: "I will create a review page and give the review field in the form of a form on that page. That review will be submitted to the collection of the weekend.",
  },
  {
    id: 2,
    name: "Sports Equipment Website",
    image: sport,
    stack: ["React", "Tailwind CSS", "Firebase", "DaisyUi", "MongoDb Atlas", "CSS", "HTML"],
    description: "A sports equipment website built with React, featuring both frontend and backend functionalities, offers a seamless experience for users to browse and purchase sporting goods. The frontend, developed using React, provides a dynamic, user-friendly interface, with features like product filtering, shopping cart management, and an easy checkout process. The backend, powered by Node.js and Express, handles the business logic, product data management, and user authentication.MongoDB is used as the database to store user profiles, product listings, and order details. Its flexibility allows easy scaling as the product catalog grows. Firebase provides real-time functionalities, such as user authentication and cloud storage, ensuring secure and smooth login experiences and fast media loading (e.g., product images).This combination of technologies provides a robust, scalable solution for a modern sports equipment store, catering to both customer and administrative needs.",
    liveLink: "https://assignment-ten-e538a.firebaseapp.com/",
    githubLinkClient: "https://github.com/sharmin112195/assignment-ten-client",
    githubLinkServer: "https://github.com/sharmin112195/assignment-ten-server",
    challenges: "First time working on backend on this website. At first i did not understand anything like get,put, post, patch, delete, update. It has become a habit to come. ",
    improvements: "Plan to change a lot and add JWT for security.",
  },
  {
    id: 3,
    name: "career counseling Website",
    image: career,
    stack: ["React", "Tailwind CSS", "daisyUi", "Firebase", "CSS", "HTML"],
    description: "A career counseling website serves as a valuable resource for individuals seeking guidance in navigating their professional paths. It offers expert advice, tools, and resources to help users identify their strengths, explore various career options, and make informed decisions about their future. The website typically features career assessments, personality tests, job market insights, educational resources, and personalized counseling sessions. With the growing complexity of the job market and the increasing need for specialized skills, a career counseling website can empower individuals to align their interests and values with suitable career opportunities, thereby ensuring long-term career satisfaction and success.",
    liveLink: "https://career-counseling-e2d00.web.app/",
    githubLinkClient: "https://github.com/sharmin112195/assignment-nine",
    githubLinkServer: "",
    challenges: "Update Profile and forgetting password has become very challenging.",
    improvements: "Some image and others will change the colors.",
  },
];

const Projects = () => {
    const navigate = useNavigate();
  const handleViewMore = (project) => {
    navigate('/details', { state: project });
  };
  return (
    <div id='projects' className="container mx-auto px-4 py-8" data-aos='fade-up' data-aos-delay='250'>
      <h2 className="text-5xl font-bold text-cyan-700 text-center mb-6 italic">My Projects</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="card shadow-xl">
            <img src={project.image} alt={project.name} className="w-full h-52 p-6" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Name: {project.name}</h3>
              <button 
                to="/details" 
                onClick={() => handleViewMore(project)} 
                className="btn bg-cyan-700 text-white mt-4"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
