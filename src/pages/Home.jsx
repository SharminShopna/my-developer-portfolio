import { useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills/Skills";
import EducationalQualification from "../components/EducationQualification";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
 import Language from "../components/Language";

const Home = () => {
    useEffect(() =>{
        AOS.init({
            duration: 1000,
        });

    },[]);
    return (
        <>
        <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <EducationalQualification></EducationalQualification>
        <Projects></Projects>
        <Language></Language>
        <Contact></Contact>
        <Footer></Footer>

        </div>
            
        </>
    );
};

export default Home;