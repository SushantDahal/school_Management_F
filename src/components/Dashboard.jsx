import FinanceCard from "./FinanceCard";
import { FaCoins } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { FaRegChartBar } from "react-icons/fa";
import img1 from "../LandingPage/images/Testimonial1.png";
import img2 from "../LandingPage/images/Testimonial2.png";
const Dashboard = () => {
  return (
    <div className="w-full ">
      <div className="bg-gradient-to-b from-[#8989ea] via-purple-200 to-blue-500 p-4 pl-5  my-6 ">
        <h1 className="text-2xl  font-bold ">Welcome Back Sushant</h1>
        <h2 className="py-1 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim
          adipisci corporis.
        </h2>
      </div>
      <div>
        <div className="bg-gradient-to-b from-[#8989ea] via-purple-200 to-blue-500 grid lg:grid-cols-4 my-8 p-4 pl-5 gap-4">
          <div className="col-span-3 px-4">
            <h1 className="text-2xl px-2 font-bold">Finance</h1>
            <div className="grid md:grid-cols-3 bg-red gap-4 my-4">
              <FinanceCard
                text="Total Payable"
                amount="$10,000"
                icon={<FaCoins size={60} className=" text-[#7b7bf5] " />}
              />
              <div className="border-4 border-[#3434ee] rounded-lg">
                <FinanceCard
                  text="Total Paid"
                  amount="$5,000"
                  icon={<GiPayMoney size={60} className=" text-[#7b7bf5] " />}
                />
              </div>
              <FinanceCard
                text="Others"
                amount="$300"
                icon={<FaRegChartBar size={60} className=" text-[#7b7bf5] " />}
              />
            </div>
          </div>
          <div className="lg:col-span-1 col-span-3 ">
            <h1 className="text-xl px-2 font-bold">Course Instructor</h1>
            <div className=" my-4">
              <div className="flex lg:justify-center lg::items-center gap-2  px-2">
                <img
                  src={img1}
                  alt=""
                  className="border-[4px] border-blue-700 rounded-full w-[50px] h-[50px]"
                />
                <img
                  src={img2}
                  alt=""
                  className="border-[4px] border-blue-700 rounded-full w-[50px] h-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
