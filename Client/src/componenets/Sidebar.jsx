import NavBar from "../componenets/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import PersonalInfo from "./PersonalInfo";

function Sidebar() {
  return (
    // image
    <div className="bg-[#1e1e1f] text-white w-full sticky right-0 flex sm:flex-col sm:w-72 h-fit sm:h-[663px] rounded-xl border-[#3c3c3c] border-1">
      <figure className="bg-[#333333] mt-10 mx-5 bg-red  w-[155px] h-[155px] hidden sm:block rounded-3xl hover:scale-110 transition-transform duration-1000">
        <img
          src="/my-avatar.png"
          alt="My Avatar"
        />
      </figure>
      {/* toggle button */}

      <div className="rleative right-0 w-full sm:hidden ">
        <NavBar />
      </div>
      {/* toggle button end */}
      <h2 className="my-3 sm:my-3 ml-3 text-sm sm:text-2xl justify-center items-center sm:mx-0 hidden sm:block">
        Varad Badgujar
      </h2>
      <div className="bg-[#2b2b2c] mb-4 ml-5 relative left-12 w-fit px-2 h-5 text-sm rounded-[5px] hidden sm:block">Web Developer</div>
      <div className="bg-[#504f4f] ml-8 w-48 h-[1px] hidden sm:block"></div>
      <div className="hidden sm:block"><PersonalInfo /></div>
      
    </div>
  );
}

export default Sidebar;
