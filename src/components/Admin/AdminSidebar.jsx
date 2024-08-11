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
import { FaChevronDown } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import Topbar from "./AdminTopbar";
import AddStudent from "./AddStudent";
import AddStaff from "./AddStaff";
import AddTeacher from "./AddTeacher";
import { Link } from "react-router-dom";
import AdminDasboard from "./AdminDashboard/AdminDashboard";

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Feedback");
  const [activeSidebarItem, setActiveSidebarItem] = useState("");
  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleComponentChange = (component, item) => {
    setActiveComponent(component);
    setActiveSidebarItem(item);
  };

  return (
    <div className="w-full min-h-screen flex flex-row">
      <div
        className={`w-0 md:min-w-[24%] ${
          isSidebarOpen ? "pr-60" : ""
        } overflow-hidden bg-gradient-to-b from-[#8989ea] via-purple-200 to-blue-500 transition-all duration-300`}
      >
        <div className="p-4 w-[500px]">
          <h1>Admin</h1>
        </div>
        <hr />
        <div>
          <div className="flex flex-col pl-4 mt-2">
            <Sidebar
              iconData={<MdDashboard size={20} />}
              textData="Admin Dashboard"
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

            <div
              className={`${
                !drop ? "h-14 overflow-hidden " : "h-[200px] border-b"
              } max-w-[205px] duration-500 ease-in-out `}
              onClick={handleDrop}
            >
              <Sidebar
                iconData={<FaChevronDown size={20} />}
                textData="Add Student"
              />
              <div
                className={`bg-gradient-to-t overflow-hidden from-[#a1a1e9] via-purple-200 to-blue-100   duration-500 ${
                  drop ? "opacity-100" : "opacity-0"
                }`}
              >
                <Sidebar
                  iconData={<PiStudentBold size={20} />}
                  textData="Add Student"
                  onClick={() =>
                    handleComponentChange("addstudent", "addstudent")
                  }
                  isActive={activeSidebarItem === "addstudent"}
                />

                <Sidebar
                  iconData={<GiTeacher size={20} />}
                  textData="Add Teacher"
                  onClick={() =>
                    handleComponentChange("addteacher", "addteacher")
                  }
                  isActive={activeSidebarItem === "addteacher"}
                />
                <Sidebar
                  iconData={<FaPeopleGroup size={20} />}
                  textData="Add Staff"
                  onClick={() => handleComponentChange("addstaff", "addstaff")}
                  isActive={activeSidebarItem === "addstaff"}
                />
              </div>
            </div>
            <Sidebar
              iconData={<FaRunning size={20} />}
              textData="Receive Leave"
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
              textData="Receive Feedback"
              onClick={() => handleComponentChange("Feedback", "Send Feedback")}
              isActive={activeSidebarItem === "Send Feedback"}
            />
            <Sidebar
              iconData={<FaRunning size={20} />}
              textData="Events"
              onClick={() => handleComponentChange("Events", "Events")}
              isActive={activeSidebarItem === "Events"}
            />
            <Sidebar
              iconData={<FaBusAlt size={20} />}
              textData="Exam"
              onClick={() => handleComponentChange("Exam", "Exam")}
              isActive={activeSidebarItem === "Exam"}
            />
            <Sidebar
              iconData={<IoIosNotifications size={20} />}
              textData="View Notification"
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
        {activeComponent === "addstudent" && <AddStudent />}
        {activeComponent === "addteacher" && <AddTeacher />}
        {activeComponent === "Dashboard" && <AdminDasboard />}
      </div>
    </div>
  );
};

export default AdminSidebar;
