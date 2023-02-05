import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// import { FaShoppingCart, FaBars } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="flex justify-between items-center px-4 lg:px-12 py-8">
        <img src={Logo} alt="" className="w-[200px] md:w-[400px] " />

        <div className="flex gap-2 md:gap-5 pr-2 md:pr-0">
          <a href="https://github.com/jatin2311" target="_blank">
            <AiFillGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/jatin-agrahari2311/"
            target="_blank"
          >
            <AiFillLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className="text-center">
        <p className="text-center">
          Designed by <span className="text-[20px] px-2 underline"> Jatin</span>
          with
          <span className="">❤️</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
