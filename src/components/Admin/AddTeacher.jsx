import { Link } from "react-router-dom";
import InputField from "../account/InputField";

import Female from "../../LandingPage/images/Female.png";
const AddTeacher = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r min-h-screen max-h-full  py-2 from-violet-800 via-indigo-300 to-indigo-800 border-t-[1px]">
        <div className="max-w-[1240px] mx-auto  ">
          <div className="grid lg:grid-cols-2  py-2">
            <div className=" lg:order-1 order-2">
              <div>
                {" "}
                <img
                  src={Female}
                  alt=""
                  className="px-8 mx-auto   md:pt-0 pt-6 "
                />
              </div>
            </div>
            <div className="text-black flex flex-col max-w-[1000px]  lg:px-6 px-10 lg:order-2 order-1">
              <div className="px-2">
                <h1 className="text-2xl text-white md:text-3xl lg:text-3xl underline   pb-3 font-bold   text-center  ">
                  Add Teacher
                </h1>
              </div>
              <div className=" w-[100%] p-2 my-2 border-b-2 mx-auto">
                <form action="">
                  <InputField label="Name" placeholder="Name" type="text" />

                  <InputField label="Email" placeholder="Email" type="email" />
                  <InputField
                    label="Password"
                    placeholder="password"
                    type="password"
                  />

                  <div className="w-full text-center ">
                    <button
                      type="submit"
                      className="w-full bg-[#f3a920] text-white font-bold text-xl rounded-md py-2 my-3 cursor-pointer hover:bg-[#ffea32] hover:text-[white] duration-150 "
                    >
                      Add Student
                    </button>

                    <p className="text-center text-[14px] py-2 mt-2">
                      Already have an account?
                      <Link
                        to="/Login"
                        className="text-[#f3a920]  cursor-pointer px-2"
                      >
                        Log in
                      </Link>{" "}
                      {/* Use Link for navigation */}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
export default AddTeacher;
