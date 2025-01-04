import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state; 

  return (
    <>
    <div className="w-11/12 mx-auto">
    <Navbar></Navbar>
    <div className="container mx-auto px-4 py-8 bg-cyan-50 mt-28 my-4" data-aos='fade-up' data-aos-delay='250'>
      <h2 className="text-3xl text-cyan-700 font-bold ml-4 mb-6">Name: {project.name}</h2>
      <div className="p-4 space-y-2">
         <p><strong>Stack:</strong> {project.stack.join(", ")}</p> 
        <p><strong>Description:</strong> {project.description}</p>
        <p><strong>Challenges:</strong> {project.challenges}</p>
        <p><strong>Improvements:</strong> {project.improvements}</p>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-cyan-800">View Live: {project.liveLink}</a>
        <br />
        <a href={project.githubLinkClient} target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-cyan-800">GitHubLinkClient: {project.githubLinkClient}</a>
        <br />
        <a href={project.githubLinkServer} target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-cyan-800">GitHubLinkServer:{project.githubLinkServer} </a>
      </div>
      <Link to={'/'} className="btn bg-cyan-700 text-white ml-4">Go Back</Link>
    </div>
    </div>
    </>
  );
};

export default ProjectDetails;
