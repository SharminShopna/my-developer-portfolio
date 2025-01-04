import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";


const Navbar = () => {
    const links = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/">Projects</NavLink>
          </li>
          
          
          
        </>
      );
    return (
        <>
        <div data-aos='fade-up' className="pt-5 fixed w-[95%] top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
           <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-1 shadow">
        {links}
      </ul>
    </div>
    <div className="flex gap-1 text-center items-center justify-center text-cyan-700">
              <img className="w-12 h-12 hidden md:block rounded-full" src={logo} alt="" />
              <h2 className=" font-semibold text-lg">
                <span className="text-4xl font-bold ">P</span>ortfolio.
              </h2>
              </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a href="#contact" className="btn bg-cyan-700 text-white">Contact Me</a>
  </div>
</div> 
</div>
        </>
    );
};

export default Navbar;