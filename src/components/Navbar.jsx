import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a className="text-2xl lg:text-4xl font-play text-white" href="#">
          Rajesh Waran
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/rajesh-waran" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/rajeshwaran-1" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com/wiz_oftime" target="_blank">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
