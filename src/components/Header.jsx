import { useContext, useEffect, useState, useRef } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { BsBag } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    );
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header
      className={`${isActive ? "bg-white shadow-2xl shadow-gray-500" : "bg-white text-black font-semibold bg-opacity-20 shadow-2xl"
        } fixed w-full z-20 transition-all duration-300`}
    >
      <div
        ref={ref}
        className="container mx-auto flex items-center justify-between h-full px-4 md:px-8"
      >
        <Link to={"/"}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            <img className="w-[50px] md:w-[70px]" src={Logo} alt="Logo" />
          </motion.div>
        </Link>

        <motion.div
          className="flex-grow flex justify-center  md:flex"
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <nav>
            <ul className="flex space-x-4 md:space-x-8">
              <li>
                <a href="#Hero" className="hover:text-gray-700 cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#Home" className="hover:text-gray-700 cursor-pointer">
                  Collections
                </a>
              </li>
              <li>
                <a href="#Footer" className="hover:text-gray-700 cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>

        <motion.div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="cursor-pointer flex relative"
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <FaRegCircleUser className="text-xl mr-2 -mt-2" />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-9 bg-violet-400 border-solid border-white shadow-lg rounded-md w-48 md:w-56">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-violet-500  hover:shadow-slate-800 hover:shadow-lg cursor-pointer flex items-center">
                  Profile <CgProfile className="ml-auto text-2xl" />
                </li>
                {isAuthenticated ? (
                  <li className="px-4 py-2 hover:bg-violet-500  hover:shadow-slate-800 hover:shadow-lg cursor-pointer flex items-center" onClick={handleLogout}>
                    Logout <FiLogOut className="ml-auto text-2xl" />
                  </li>
                ) : (
                  <li className="px-4 py-2 hover:bg-violet-500 hover:shadow-slate-800 hover:shadow-lg cursor-pointer flex items-center" onClick={handleLoginClick}>
                    Login <FiLogOut className="ml-auto text-2xl" />
                  </li>
                )}
              </ul>
            </div>
          )}
        </motion.div>

        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative animate-bounce ml-4"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <BsBag className="text-xl -mt-2" />
          <div className="bg-red-500 absolute -right-1 -bottom-1 top-0 text-[10px] w-[16px] h-[16px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
            <span className="absolute inline-flex w-[16px] h-[16px] animate-ping rounded-full bg-red-400 opacity-75"></span>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
