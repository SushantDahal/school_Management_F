import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import profile from "../../assets/signUpimg.png";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import { RiMenu2Line } from "react-icons/ri";
import Dropdown from "./Dropdown";

const AdminTopbar = ({ toggleSidebar }) => {
  const [dropDown, setDropDown] = useState(false);

  const handleDrop = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="flex justify-between py-1 border-b-2   px-6 gradient-border">
      <div className="flex items-center">
        <RiMenu2Line
          className="md:hidden flex mr-6 cursor-pointer"
          size={30}
          onClick={toggleSidebar}
        />
        <h1 className="lg:text-[20px] md:text-[16px] text-[14px] ">
          <span className="font-bold"> Welcome</span> Admin
        </h1>
      </div>

      <div className="flex md:justify-normal justify-center items-center gap-4">
        <div className="flex relative">
          <IoIosNotifications size={35} />
          <small className="absolute right-0 -top-2">4</small>
        </div>
        <div className="flex items-center gap-1">
          <img
            src={profile}
            alt="Profile Picture"
            className="w-8 h-8 object-cover rounded-full"
          />

          {dropDown ? (
            <>
              <FaChevronUp
                size={10}
                onClick={handleDrop}
                className="cursor-pointer"
              />
              <Dropdown />
            </>
          ) : (
            <FaChevronDown
              size={10}
              onClick={handleDrop}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTopbar;
