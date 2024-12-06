import { useState } from "react";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between px-2 py-3 bg-color">
      <a href="#" className="font-bold text-lime-400">
        Ragul R
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </nav>
     {toggleMenu && <nav className="block md:hidden mob-nav">
        <ul className="flex flex-col text-white mob-nav">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </nav>}
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
