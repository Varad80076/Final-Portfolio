import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faFileLines,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Experience from './Experience';
import ContactForm from './ContactForm';
import { ToastContainer} from 'react-toastify';

function AllRoute() {
  return (
    <>
    <div className='flex flex-col sm:flex-row bg-grey-500 justify-around gap-3 p-0 rounded-md h-[720px] mt-0 w-full'>
    <ToastContainer />
      <Sidebar />
      <div id='varad' className='relative flex flex-wrap bg-[#1e1e1f] w-full sm:w-6xl justify-around gap-3 h-[580px] rounded-xl sm:h-[663px] overflow-scroll scrollbar-none border-[#3c3c3c] border-1'>
        {/* NavBar start */}
        <div id="nev" className="hidden absolute z-10 sm:flex flex-row gap-1 right-0 justify-items-end items-center bg-[#282829] pb-1 pr-2 lg:pt-3 rounded-tr-lg rounded-bl-sm">
          <ul className="flex flex-row gap-1 ">
            <li className='hover:scale-110 transition-transform duration-200'>
              <Link className="btn shadow-xl rounded-xl text-white hover:border-[#877748] text-xs sm:text-base " to="/about">
                <FontAwesomeIcon icon={faUser} /> About
              </Link>
            </li>
            <li className='hover:scale-110 transition-transform duration-200'>
              <Link className="btn shadow-xl rounded-xl text-white hover:border-[#877748] text-xs sm:text-base " to="/resume">
                <FontAwesomeIcon icon={faFile} /> Resume
              </Link>
            </li>
            <li className='hover:scale-110 transition-transform duration-200'>
              <Link className="btn shadow-xl rounded-xl text-white hover:border-[#877748] text-xs sm:text-base " to="/project">
                <FontAwesomeIcon icon={faFile} /> Projects
              </Link>
            </li>
            <li className='hover:scale-110 transition-transform duration-200'>
              <Link className="btn shadow-xl rounded-xl text-white hover:border-[#877748] text-xs sm:text-base " to="/experience">
                <FontAwesomeIcon icon={faFileLines} /> Experience
              </Link>
            </li>
            <li className='hover:scale-110 transition-transform duration-200'>
              <Link className="btn shadow-xl rounded-xl text-white hover:border-[#877748] text-xs sm:text-base " to="/contact">
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* NavBar end */}

        {/* Main content */}
        <div className='relative flex flex-wrap bg-grey-700 w-full sm:w-6xl sm:mt-[68px] pt-3 px-3 pb-4 justify-around gap-2 h-[685px] rounded-xl sm:h-[653px] overflow-scroll scrollbar'>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/navbar" element={<NavBar />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/project" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </div>

    <div className="fixed bottom-0 w-full bg-white z-50"></div>
    </>
  );
}

export default AllRoute;
