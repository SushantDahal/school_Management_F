import React from "react";

const Sidebar = ({ iconData, textData, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 py-3 transition-all w-[200px] my-1 px-2 cursor-pointer ${
        isActive ? "translate-x-6" : ""
      } hover:shadow-md shadow-black duration-300`}
    >
      <div className="mr-2">{iconData}</div>
      <div>{textData}</div>
    </div>
  );
};

export default Sidebar;
