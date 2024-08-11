import Tasks from "./Tasks";
import { FaBook } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import { FaRegChartBar } from "react-icons/fa";
import img1 from "../../LandingPage/images/Testimonial1.png";
import img2 from "../../LandingPage/images/Testimonial2.png";
import img3 from "../../LandingPage/images/Female.png";
import Dashboard1 from "../../LandingPage/images/Dashboard1.png";
import { FaLaptopCode } from "react-icons/fa6";
import Notice from "./Notice";
import EnrolledCourse from "./EnrolledCourse";

const Dashboard = () => {
  return (
    <div className="w-full  ">
      <div className="bg-gradient-to-b from-[#8989ea] via-purple-200 to-blue-500 p-4 pl-5 my-2  ">
        <div className="grid grid-cols-2 items-center ">
          <div>
            <h1 className="lg:text-3xl md:text-2xl  font-bold ">
              Welcome Back Sushant
            </h1>
            <h2 className="py-1 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              enim adipisci corporis.
            </h2>
          </div>
          <div className="flex justify-end">
            <img
              src={Dashboard1}
              alt=""
              className="bg-transparent max-h-[210px]"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gradient-to-b from-[#8989ea] via-purple-200 to-blue-500 grid lg:grid-cols-4 mt-3 p-4 pl-5 gap-4">
          <div className="col-span-3 px-4">
            <h1 className="text-2xl px-2 font-bold">Tasks</h1>
            <div className="grid md:grid-cols-3 bg-red gap-4 my-4">
              <Tasks
                text="Assignment"
                icon={<FaBook size={60} className=" text-[#7b7bf5] " />}
              />
              <div className="border-4 border-[#3434ee] rounded-3xl">
                <Tasks
                  text="Home Work"
                  icon={
                    <MdMapsHomeWork size={60} className=" text-[#7b7bf5] " />
                  }
                />
              </div>
              <Tasks
                text="Home Work"
                icon={<FaRegChartBar size={60} className=" text-[#7b7bf5] " />}
              />
            </div>
            <div className="flex justify-between">
              <h1 className="text-2xl px-2 font-bold">Enrolled Courses</h1>
              <h1 className="text-2xl px-2 text-[#7b7bf5] font-bold cursor-pointer hover:text-[#4949df]">
                See all
              </h1>
            </div>
            <div className="grid md:grid-cols-2 bg-red gap-4 my-4">
              <div className="border-4 border-[#3434ee] rounded-3xl">
                <EnrolledCourse
                  text="Object Oriented Programming"
                  icon={<FaLaptopCode size={90} className=" text-[#7b7bf5] " />}
                />
              </div>
              <EnrolledCourse
                text="Others"
                amount="$300"
                icon={<FaRegChartBar size={60} className=" text-[#7b7bf5] " />}
              />
              <EnrolledCourse
                text="Others"
                amount="$300"
                icon={<FaRegChartBar size={60} className=" text-[#7b7bf5] " />}
              />{" "}
              <div className="border-4 border-[#3434ee] rounded-3xl">
                <EnrolledCourse
                  text="Object Oriented Programming"
                  icon={<FaLaptopCode size={90} className=" text-[#7b7bf5] " />}
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 col-span-3 ">
            <h1 className="text-xl px-2 font-bold">Course Instructor</h1>
            <div className=" my-4">
              <div className="flex  gap-2 overflow-x-auto  ">
                <img
                  src={img1}
                  alt=""
                  className="border-[4px] border-blue-700 rounded-full max-w-[80px] max-h-[80px]"
                />
                <img
                  src={img2}
                  alt=""
                  className="border-[4px] border-blue-700 rounded-full max-w-[80px] max-h-[80px]"
                />{" "}
                <img
                  src={img3}
                  alt=""
                  className="border-[4px] border-blue-700 rounded-full min-w-[80px] h-[80px] object-fill"
                />
              </div>
            </div>

            <div>
              <div className="flex font-bold  justify-between ">
                <h1 className=" text-xl">Daily Notice</h1>
                <h1 className="hover:text-[#7b7bf5] cursor-pointer text-[#5050e9] duration-150 ease-in-out text-xl">
                  see all
                </h1>
              </div>
              <div className="bg-white rounded-md p-2 my-2">
                <Notice
                  title="Payment Due"
                  desc="you must pay your bill on time because we are not here for social work"
                />
                <Notice
                  title="Exam Schedule"
                  desc="Read and practice well, your parents are working hard for  your time "
                />
                <Notice
                  title="Payment Due"
                  desc="you must pay your bill on time because we are not here for social work"
                />
                <Notice
                  title="Exam Schedule"
                  desc="Read and practice well, your parents are working hard for  your time "
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
