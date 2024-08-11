import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import Logo from "../LandingPage/images/logo.png";
import { Btn } from "../components/Button";

const tabs = ["Home", "About", "Courses", "Blog", "Contact"];

const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const [nav, setNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path =
      location.pathname.substring(1).charAt(0).toUpperCase() +
      location.pathname.slice(2);
    setSelected(path || "Home");
  }, [location]);

  const HandleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full z-20 bg-gradient-to-r from-violet-800 via-indigo-300 to-indigo-800 sticky top-0">
      <div className="max-w-[1240px] mx-auto text-white font-bold rounded-md flex justify-between h-20 items-center px-4">
        <img src={Logo} alt="Logo" className="w-[100px] h-[70px]" />
        <div className="max-w-[1240px] mx-auto lg:flex hidden justify-between items-center gap-10">
          <div>
            {tabs.map((tab) => (
              <Link
                to={`/${tab.toLowerCase()}`}
                key={tab}
                onClick={() => setSelected(tab)}
              >
                <Chip
                  text={tab}
                  selected={selected === tab}
                  setSelected={setSelected}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:flex hidden">
          <Link to="/login">
            <Btn btn="Account" className="mt-4" />
          </Link>
        </div>
        <RiMenu2Line className="lg:hidden flex" size={30} onClick={HandleNav} />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[60%] h-full bg-gradient-to-b from-[#8989ea] via-purple-400 to-blue-500 text-white z-30 py-2 transition-transform ${
          nav
            ? "transform duration-700 translate-x-0"
            : "transform duration-500 -translate-y-full"
        }`}
      >
        <div className="flex justify-around items-center bg-transparent shadow-md shadow-blue-200 w-full">
          <img src={Logo} alt="Logo" className="w-[120px] h-[80px]" />
          <ImCross size={24} className="cursor-pointer" onClick={HandleNav} />
        </div>

        <div className="pl-20 flex gap-6 flex-col mt-4 ">
          {" "}
          {tabs.map((tab) => (
            <Link
              to={`/${tab.toLowerCase()}`}
              key={tab}
              onClick={() => {
                setSelected(tab);
                HandleNav();
              }}
            >
              <button
                className={`${
                  selected === tab
                    ? "text-white  px-4 border-red-300 border-b-2"
                    : "text-slate-100 hover:text-slate-200 font-bold"
                } text-xl py-2 px-4 duration-300 transition-all hover:shadow-lg shadow-black`}
              >
                {tab}
              </button>
            </Link>
          ))}
          <Link to="/login">
            <Btn btn="Account" className="mt-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? "text-white" : "text-slate-100 hover:text-slate-200"
      } text-xl transition-colors px-4 p-0.5 rounded-md relative mx-6 shadow-black hover:bg-blue-800`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.7 }}
          className="absolute inset-0 z-0 px-2 bg-gradient-to-r rounded-md from-violet-800 to-blue-300"
        ></motion.span>
      )}
    </button>
  );
};

export default Navbar;
