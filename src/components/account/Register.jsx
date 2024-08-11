import Navbar from "../../LandingPage/Navbar";
import Herosection from "../../LandingPage/Herosection";
import { Btn } from "../Button";
import Google from "../../assets/google.png";
import { Link } from "react-router-dom";
import InputField from "./InputField";

import Female from "../../LandingPage/images/Female.png";

const Register = () => {
  return (
    <div>
      <Navbar />

      <div className="w-full bg-gradient-to-r from-violet-800 via-indigo-300 to-indigo-800 border-t-[1px]">
        <div className="max-w-[1240px] mx-auto  ">
          <div className="grid lg:grid-cols-2  py-10">
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
            <div className="text-black flex flex-col max-w-[1000px] my-7 lg:px-6 px-10 lg:order-2 order-1">
              <div className="px-2">
                <h1 className="text-2xl md:text-3xl lg:text-3xl underline   pb-3 font-bold   text-center  ">
                  Mero school
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
                      Create Account
                    </button>

                    <p className="text-center text-[14px] py-2 mt-2">
                      Already have an account?
                      <Link
                        to="/Login"
                        className="text-[#f3a920]  cursor-pointer"
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
    </div>
  );
};

export default Register;
