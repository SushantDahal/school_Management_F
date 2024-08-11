import Total from "./Total";
import { GiGraduateCap } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
const AdminDasboard = () => {
  return (
    <div className="bg-red-200 p-6 bg-gradient-to-b from-[#8989ea] via-purple-200 to-blue-500">
      <div className="grid md:grid-cols-4 gap-8 ">
        <Total
          icon={<GiGraduateCap size={50} />}
          title="Total Students"
          data="2500"
        />
        <Total icon={<FaUsers size={50} />} title="Total Teachers" data="600" />
        <Total
          icon={<FaCircleDollarToSlot size={50} />}
          title="Total Employees"
          data="150"
        />
        <Total
          icon={<FaUserFriends size={50} />}
          title="Total Earnings"
          data="RS 100,000"
        />
      </div>
    </div>
  );
};

export default AdminDasboard;
