import logo from "../assets/images/logo.jpg";
import profilePic from "../assets/images/profile-pic.png";
import { FiBell, FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navLeft">
        <img src={logo} alt="" />
        <div className="">
          <input type="text" placeholder="Search or jump" />
        </div>
      </div>

      <div className="navCenter">
        <h2>Pulls</h2>
        <h2>Issues</h2>
        <h2>Marketplace</h2>
        <h2>Explore</h2>
      </div>

      <div className="navRight">
        <FiBell />
        <div className="navRightIcons">
          <FiPlus />
          <IoMdArrowDropdown />
        </div>
        <div className="navRightIcons">
          <img src={profilePic} alt="" />
          <IoMdArrowDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
