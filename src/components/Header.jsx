import { useState } from "react";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between px-2 py-6 bg-header sticky top-0 z-50">
      <a href="#" className="font-bold font-header-font text-lime-400">
        R A G U L . R 🚀
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            {" "}
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Project">Project</a>
          </li>
          <li>
            <a href="#Resume">Resume</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden mob-nav">
          <ul className="flex flex-col text-white mob-nav"  
          onClick={() => {
          setToggleMenu(!toggleMenu);
        }}>
          <li>
            {" "}
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Project">Project</a>
          </li>
          <li>
            <a href="#Resume">Resume</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          </ul>
        </nav>
      )}
      <button
        className="block md:hidden"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        <IoMenu className="text-white text-[25px]" />
      </button>
    </div>
  );
};

export default Header;
