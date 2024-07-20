import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { FaRunning } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import Sidebar from "../Sidebar_list";
import Topbar from "./Topbar";
import Leave from "../Leave";
import Feedback from "../Feedback";
import ViewResult from "../ViewResult";
import Notification from "../Notification";
import Transportation from "../Transportation";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";

const StudentSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Feedback");
  const [activeSidebarItem, setActiveSidebarItem] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleComponentChange = (component, item) => {
    setActiveComponent(component);
    setActiveSidebarItem(item);
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <div
        className={`w-0 md:min-w-[24%] ${
          isSidebarOpen ? "pr-60" : ""
        } overflow-hidden bg-gradient-to-b from-[#8989ea] via-purple-200 to-blue-500 transition-all duration-300`}
      >
        <div className="p-4 w-[500px]">
          <h1>Mero School</h1>
        </div>
        <hr />
        <div>
          <div className="flex flex-col pl-4 mt-6">
            <Sidebar
              iconData={<MdDashboard size={20} />}
              textData="Dashboard"
              onClick={() => handleComponentChange("Dashboard", "Dashboard")}
              isActive={activeSidebarItem === "Dashboard"}
            />
            <Sidebar
              iconData={<FaCalendarAlt size={20} />}
              textData="View Attendance"
              onClick={() =>
                handleComponentChange("View Attendance", "View Attendance")
              }
              isActive={activeSidebarItem === "View Attendance"}
            />
            <Sidebar
              iconData={<FaChartBar size={20} />}
              textData="View Result"
              onClick={() =>
                handleComponentChange("View Result", "View Result")
              }
              isActive={activeSidebarItem === "View Result"}
            />
            <Sidebar
              iconData={<FaRunning size={20} />}
              textData="Apply for Leave"
              onClick={() => handleComponentChange("Leave", "Apply for Leave")}
              isActive={activeSidebarItem === "Apply for Leave"}
            />
            <Sidebar
              iconData={<FaBusAlt size={20} />}
              textData="Transportation"
              onClick={() =>
                handleComponentChange("Transportation", "Transportation")
              }
              isActive={activeSidebarItem === "Transportation"}
            />
            <Sidebar
              iconData={<FiMessageCircle size={20} />}
              textData="Send Feedback"
              onClick={() => handleComponentChange("Feedback", "Send Feedback")}
              isActive={activeSidebarItem === "Send Feedback"}
            />
            <Sidebar
              iconData={<IoIosNotifications size={20} />}
              textData="Notification"
              onClick={() =>
                handleComponentChange("Notification", "Notification")
              }
              isActive={activeSidebarItem === "Notification"}
            />
            <Link to="/Landing">
              <Sidebar
                iconData={<IoIosLogOut size={20} />}
                textData="Logout"
                onClick={() => handleComponentChange("Logout", "Logout")}
                isActive={activeSidebarItem === "Logout"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-[78%] w-full p-4 border-b-2 border-black-600 min-w-[400px]">
        <Topbar toggleSidebar={toggleSidebar} />
        {activeComponent === "Leave" && <Leave />}
        {activeComponent === "Feedback" && <Feedback />}
        {activeComponent === "Dashboard" && <Dashboard />}
        {activeComponent === "View Attendance" && (
          <div className="text-[200px]">Under Construction</div>
        )}
        {activeComponent === "View Result" && <ViewResult />}
        {activeComponent === "Transportation" && <Transportation />}
        {activeComponent === "Notification" && <Notification />}
        {activeComponent === "Logout" && (
          <div className="text-[200px]">Under Construction</div>
        )}
      </div>
    </div>
  );
};

export default StudentSidebar;
