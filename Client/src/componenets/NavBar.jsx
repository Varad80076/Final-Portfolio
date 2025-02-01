import {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
  } from 'reactstrap';
  import { Link } from 'react-router-dom';
function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    const [activeLink, setActiveLink] = useState(false);
  
    const handleLinkClick = (link) => {
      setActiveLink(link);}
  return (
        <div className='relative w-full rounded-lg p-0 navbar-expand-lg  flex-wrap '>
  
          <Navbar {...args} className=''>
            <img
          src="/my-avatar.png"
          alt="My Avatar"
          className="relative top-2  bg-[#333333] mt-0 mb-2 sm:mt-10 sm:mx-1 mx-0   bg-red below-sm:w-[30px] below-sm:h-[30px]  sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] rounded-full navbar-expand-lg"
        />
            <Link className=' relative top-1 ml-1 hover:text-cyan-500 below-sm:text-[14px] text-[22px]  mr-2 pr-1 no-underline text-white' href="">Varad Badgujar</Link>
<i className="fas fa-bars relative top-1 right-3 text-2xl"onClick={toggle}></i>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto gap-1 text-center" navbar>
               
                <NavItem>
                  <Link className={`hover:text-[#ffc663] ${activeLink === "/about" ? "text-[#ffc663]" : "text-white"} no-underline`} to='/about' onClick={() => handleLinkClick("/about")}>
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className={`hover:text-[#ffc663] ${activeLink === "/resume" ? "text-[#ffc663] " : "text-white"} no-underline`} to='/resume' onClick={() => handleLinkClick("/resume")}>
                    Resume
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className={`hover:text-[#ffc663] ${activeLink === "/project" ? "text-[#ffc663]" : "text-white"} no-underline`} to='/project' onClick={() => handleLinkClick("/project")}>
                    Projects
                  </Link>
                </NavItem>
                <NavItem>
                <NavItem>
                  <Link className={`hover:text-[#ffc663] ${activeLink === "/experience" ? "text-[#ffc663]" : "text-white"} no-underline`} to='/experience' onClick={() => handleLinkClick("/experience")}>
                  Experience
                  </Link>
                </NavItem>
                  <Link className={`hover:text-[#ffc663] ${activeLink === "/contact" ? "text-[#ffc663]" : "text-white"} no-underline`} to='/contact'onClick={() => handleLinkClick("/contact")}>
                    Contact
                  </Link>
                </NavItem>
               
              </Nav>
              
            </Collapse>
            

          </Navbar>
          <NavbarToggler />
        </div>
    
  );
}

export default NavBar;