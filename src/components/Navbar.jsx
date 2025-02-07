import { useState } from "react";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const links = (
    <>
      <li>
        <a
          href="#"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={activeLink === "about" ? "active" : ""}
          onClick={() => handleLinkClick("about")}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className={activeLink === "skills" ? "active" : ""}
          onClick={() => handleLinkClick("skills")}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className={activeLink === "projects" ? "active" : ""}
          onClick={() => handleLinkClick("projects")}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#language"
          className={activeLink === "language" ? "active" : ""}
          onClick={() => handleLinkClick("language")}
        >
          Language
        </a>
      </li>
      <li>
        <a
          href="#education"
          className={activeLink === "education" ? "active" : ""}
          onClick={() => handleLinkClick("education")}
        >
          Education
        </a>
      </li>
    </>
  );

  return (
    <>
    <div className="w-full justify-center flex">
      <div
        
        className="pt-5 fixed w-[95%] top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30"
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-1 shadow"
              >
                {links}
              </ul>
            </div>
            <div className="flex gap-1 text-center items-center justify-center text-cyan-700">
              <img
                className="w-12 h-12 hidden md:block rounded-full"
                src={logo}
                alt=""
              />
              <h2 className=" font-semibold text-lg">
                <span className="text-4xl font-bold ">P</span>ortfolio.
              </h2>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <a href="#contact" className="btn bg-cyan-700 text-white">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
